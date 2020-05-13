import { ITeamRepository, Team } from '../../core/build/index'
import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> implements ITeamRepository {
    addteam(team: Team) {
        return this.insert(team);
    }
    getTeamsCount(): Promise<number> {
        return this.count();
    }
    findBy(id: number): Promise<any> {
        return this.findOne(id);
    }

}