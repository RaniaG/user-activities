import { IReportService, UserActivityDurationSumDTO, TeamActivityDurationSumDTO } from '../../core/build/index'
import { Inject, NotImplementedException } from '@nestjs/common';
export class ReportService implements IReportService {
    constructor() {

    }
    async  getUserActivityDurationSum(): Promise<UserActivityDurationSumDTO[]> {
        throw new NotImplementedException();

        // var query = "SELECT userid,activity,sum(event_duration) as durationSum from activites.user_activity_duration group by userid,activity;";
        // var result =  await this.dataAccessLayer.getQueryResult(query);
        // return result.rows.map((item :UserActivityDurationSumDTO )=> {
        //     return item;
        // })
    }
    async getTeamActivityDurationSum(): Promise<TeamActivityDurationSumDTO[]> {
        throw new NotImplementedException();

        // var query = "SELECT teamid,activity,sum(event_duration) as durationSum from activites.team_activity_duration group by teamid,activity;";
        // var result = await this.dataAccessLayer.getQueryResult(query);
        // return result.rows.map((item: TeamActivityDurationSumDTO) => {
        //     return item;
        // })
    }

}