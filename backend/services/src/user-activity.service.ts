import { IUserActivityService, ActivityDto, ActivityDurationDto } from '../../core/build/index';
import { Inject, Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserActivityService implements IUserActivityService {
    constructor() {
    }

    async createUserActivity(activityDto: ActivityDto): Promise<any> {
        throw new NotImplementedException();

        //    try {
        //     const insert_UserActivity = this._insertIntoUserActivity(activityDto);
        //     const insert_TeamActivity = this._insertIntoTeamActivity(activityDto);
        //     await Promise.all([insert_UserActivity,insert_TeamActivity]);

        //     let userActivity = await this._getUserActivity(activityDto);
        //     if(userActivity != null && 
        //         userActivity.action == 'start' && activityDto.action == 'end'){
        //         await this.addDuration(activityDto,userActivity);
        //         return true;
        //     }
        //    } catch (error) {
        //        console.log(error);
        //        return false;
        //    }

    }

    addDuration(activityDto: ActivityDto, userActivity: ActivityDto) {
        // let endtime = new Date(activityDto.event_time).getTime();
        // let starttime = new Date(userActivity.event_time).getTime();
        // let diff = (starttime - endtime) / 1000;
        // diff /= 60;
        // const duration = Math.abs(Math.round(diff));
        // console.log('duration is ', duration);
        // const _insert_UserActivityDuration =
        //     this._insertIntoUserActivityDuration({
        //         userId: activityDto.userid,
        //         activity: activityDto.activity,
        //         teamId: activityDto.teamid,
        //         duration: duration,
        //         sessionId: activityDto.sessionid
        //     });

        // const _insert_TeamActivityDuration =
        //     this._insertIntoTeamActivityDuration({
        //         userId: activityDto.userid,
        //         activity: activityDto.activity,
        //         teamId: activityDto.teamid,
        //         duration: duration,
        //         sessionId: activityDto.sessionid
        //     });

        // return Promise.all([_insert_UserActivityDuration, _insert_TeamActivityDuration]);
    }

    createUserActivityDurations(logActivityActionDto: ActivityDurationDto) {
        throw new Error("Method not implemented.");
    }

    getUserActivitiesDurations(): any[] {
        throw new Error("Method not implemented.");
    }

    async getUserActivities(): Promise<any[]> {
        throw new Error("Method not implemented.");
        // const query = 'select userid,activity,action,sessionid,event_time from activites.user_activity';
        // const result = await this.dataAccessLayer.getQueryResult(query);
        // return result.rows;
    }

    private async _getUserActivity(userActivityDto: ActivityDto): Promise<ActivityDto> {
        throw new Error("Method not implemented.");

        // let query = `SELECT userid,activity,action,sessionid,event_time from activites.user_activity where userid=? and activity=? and sessionId=? and action=?`;
        // let command = new Command();
        // command.query = query;
        // command.params = [userActivityDto.userid, userActivityDto.activity, userActivityDto.sessionid, 'start'];
        // let result = await this.dataAccessLayer.getQueryResultByCommand(command);
        // return result.rows.map((item: ActivityDto) => {
        //     return item;
        // })[0]

    }

    private async _insertIntoUserActivity(userActivityDto: ActivityDto) {
        // let query = 'insert into activites.user_activity (userid, teamid, sessionid, action, activity, event_time) values(?,?,?,?,?,?);';
        // let command = new Command();
        // command.query = query;
        // command.params = [userActivityDto.userid, userActivityDto.teamid, userActivityDto.sessionid, userActivityDto.action, userActivityDto.activity, userActivityDto.event_time.toString()];

        // await this.dataAccessLayer.excuteCommand(command);
    }

    private async _insertIntoTeamActivity(teamActivityDto: ActivityDto) {
        // let query = 'insert into activites.user_activity_team (userid, teamid, sessionid, action, activity, event_time) values(?,?,?,?,?,?);';
        // let command = new Command();
        // command.query = query;
        // command.params = [teamActivityDto.userid, teamActivityDto.teamid, teamActivityDto.sessionid, teamActivityDto.action, teamActivityDto.activity, teamActivityDto.event_time.toString()];

        // await this.dataAccessLayer.excuteCommand(command);
    }

    private async _insertIntoUserActivityDuration(userActivityDurationDto: ActivityDurationDto) {
        // let query = 'insert into activites.user_activity_duration (userid , teamid , sessionid , activity , event_duration) values (?,?,?,?,?);';
        // let command = new Command();
        // command.query = query;
        // command.params = [userActivityDurationDto.userId, userActivityDurationDto.teamId, userActivityDurationDto.sessionId, userActivityDurationDto.activity, userActivityDurationDto.duration];

        // await this.dataAccessLayer.excuteCommand(command);
    }

    private async _insertIntoTeamActivityDuration(teamActivityDurationDto: ActivityDurationDto) {
        // let query = 'insert into activites.team_activity_duration (userid , teamid , activity , event_duration) values (?,?,?,?);';
        // let command = new Command();
        // command.query = query;
        // command.params = [teamActivityDurationDto.userId, teamActivityDurationDto.teamId, teamActivityDurationDto.activity, teamActivityDurationDto.duration];

        // await this.dataAccessLayer.excuteCommand(command);
    }
}