import { ITeamService, TeamDto, Team } from "../../core/build/index";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "../../Infrastructure/node_modules/typeorm";

export class TeamService implements ITeamService {
    constructor(@InjectRepository(Team) private readonly teamRepo: Repository<Team>) {
    }
    getTeamsCount(): Promise<number> {
        return this.teamRepo.count();
    }
    createTeam(teamDto: TeamDto): Promise<any> {
        const team = new Team();
        team.name = teamDto.name;
        return this.teamRepo.insert(team);
    }
    async getAllTeams(): Promise<any[]> {
        return this.teamRepo.find();
    }

}