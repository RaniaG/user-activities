import { TeamDto } from '../dtos/team.dto';

export interface ITeamService {
    createTeam(teamDto: TeamDto): any;
    getAllTeams(): Promise<any[]>;
    getTeamsCount(): Promise<number>;
}