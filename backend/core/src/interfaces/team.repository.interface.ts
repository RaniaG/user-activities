import { Team } from "../entities/team.entity";

export interface ITeamRepository {

    addteam(team: Team): any;
    getTeamsCount(): Promise<number>;
    findBy(id: number): Promise<Team>;
}