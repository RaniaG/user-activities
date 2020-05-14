import { ITeamActivityService, Team, User, Activity, UserActivities, UserActivitiesDuration } from "../../core/build";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class TeamActivityService implements ITeamActivityService {

    constructor(
        @InjectRepository(UserActivitiesDuration) private readonly userActDurRepo: Repository<UserActivitiesDuration>
    ) {

    }
    async getTeamActivitiesDurations(): Promise<any> {
        const durations = await this.userActDurRepo
            .createQueryBuilder("userAct")
            .select('"team"."name"', "team")
            .addSelect('"team"."id"', "teamId")
            .addSelect('"userAct"."activityId"')
            .addSelect('"act"."name"', "activity")
            .addSelect('SUM("userAct"."duration")', "duration")
            .leftJoin(User, "user", '"user"."id" = "userAct"."userId"')
            .leftJoin(Team, "team", '"user"."teamId" = "team"."id"')
            .leftJoin(Activity, "act", '"act"."id" = "userAct"."activityId"')
            .where('"team"."name" is not null')
            .groupBy('"team"."id"')
            .addGroupBy('"team"."name"')
            .addGroupBy('"userAct"."activityId"')
            .addGroupBy('"act"."name"')
            .getRawMany();

        return durations;

    }

}