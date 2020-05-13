import { ITeamService, TeamDto } from "../../core/build";
import { Inject, NotImplementedException } from "@nestjs/common";

export class TeamService implements ITeamService {
    constructor() {
    }
    createTeam(teamDto: TeamDto) {
        throw new NotImplementedException();
        // const command = {
        //     query: 'insert into activites.team (teamid, name) values (?,?);',
        //     params: [teamDto.id, teamDto.name]
        // }
        // return this.dataAccessLayer.excuteCommand(command);
    }
    async getAllTeams(): Promise<any[]> {
        throw new NotImplementedException();
        // const query = 'select teamid,name from activites.team;';
        // const result = await this.dataAccessLayer.getQueryResult(query);
        // return result.rows;
    }

}