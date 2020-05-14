import { IUserActivityService, ActivityDto, ActivityDurationDto, UserActivities, Team, User, UserActivitiesDuration, Activity } from '../../core/build/index';
import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserActivityService implements IUserActivityService {
    constructor(@InjectRepository(Team) private readonly teamRepo: Repository<Team>,
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        @InjectRepository(Activity) private readonly actRepo: Repository<Activity>,
        @InjectRepository(UserActivities) private readonly userActRepo: Repository<UserActivities>,
        @InjectRepository(UserActivitiesDuration) private readonly userActDurRepo: Repository<UserActivitiesDuration>
    ) {
    }

    async createUserActivity(activityDto: ActivityDto): Promise<any> {
        const userActivitiy = new UserActivities();
        userActivitiy.sessionId = activityDto.sessionid;
        userActivitiy.action = activityDto.action;
        userActivitiy.timeStamp = activityDto.event_time;
        //find user
        userActivitiy.user = await this.userRepo.findOne(activityDto.userid) ?? userActivitiy.user;
        let activity = await this.actRepo.findOne({ where: { name: activityDto.activity } });
        if (!activity) {
            activity = new Activity();
            activity.name = activityDto.activity;
            let insertResult = await this.actRepo.insert(activity);
        }
        userActivitiy.activity = activity;
        let insertRes = await this.userActRepo.insert(userActivitiy);
        return userActivitiy;
    }



    async createUserActivityDurations(userActivity: ActivityDto): Promise<any> {
        const alreadyExists = await this.userActDurRepo.createQueryBuilder("userAct")
            .leftJoinAndSelect("userAct.activity", "act")
            .leftJoinAndSelect("userAct.user", "usr")
            .where("userAct.sessionId = :sessionId ", { sessionId: userActivity.sessionid })
            .andWhere("act.name = :name", { name: userActivity.activity })
            .andWhere("usr.id = :id", { id: userActivity.userid })
            .getOne();
        if (!alreadyExists) {
            const startActivity = await this.userActRepo.createQueryBuilder("userAct")
                .leftJoinAndSelect("userAct.activity", "act")
                .leftJoinAndSelect("userAct.user", "usr")
                .where("userAct.sessionId = :sessionId ", { sessionId: userActivity.sessionid })
                .andWhere("userAct.action= :action", { action: "open" })
                .andWhere("act.name = :name", { name: userActivity.activity })
                .andWhere("usr.id = :id", { id: userActivity.userid })
                .getOne();
            if (startActivity) {
                let endtime = new Date(userActivity.event_time).getTime();
                let starttime = new Date(startActivity.timeStamp).getTime();
                let diff = (starttime - endtime) / 1000;
                diff /= 60;
                const actDur = new UserActivitiesDuration();
                actDur.duration = Math.abs(Math.round(diff));
                actDur.sessionId = userActivity.sessionid;
                actDur.activity = startActivity.activity;
                actDur.user = startActivity.user;
                this.userActDurRepo.insert(actDur);
            }
        }

    }

    async getUserActivitiesDurationsBySession(): Promise<any[]> {
        const durations = await this.userActDurRepo.find({ relations: ["user", "activity"] });
        return durations.map(e => {
            return {
                user: e.user.name,
                sessionId: e.sessionId,
                activity: e.activity.name,
                duration: e.duration,
                userId: e.user.id
            }
        });
    }
    async getUserActivitiesDurations(): Promise<any> {
        const durations = await this.userActDurRepo
            .createQueryBuilder("userAct")
            .select('"userAct"."userId"')
            .addSelect('"user"."name"', "user")
            .addSelect('"userAct"."activityId"')
            .addSelect('"act"."name"', "activity")
            .addSelect('SUM("userAct"."duration")', "duration")
            .leftJoin(User, "user", '"user"."id" = "userAct"."userId"')
            .leftJoin(Activity, "act", '"act"."id" = "userAct"."activityId"')
            .groupBy('"userAct"."userId"')
            .addGroupBy('"user"."name"')
            .addGroupBy('"userAct"."activityId"')
            .addGroupBy('"act"."name"')
            .getRawMany();

        return durations;
    }

    async getUserActivities(): Promise<any[]> {
        const activities = await this.userActRepo.find({ relations: ["user", "activity"] });
        return activities.map(e => {
            return {
                user: e.user.name,
                sessionId: e.sessionId,
                timeStamp: e.timeStamp,
                action: e.action,
                activity: e.activity.name
            }
        });
    }

    getActivities(): Promise<any[]> {
        return this.actRepo.find();
    }
}