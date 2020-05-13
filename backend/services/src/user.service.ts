import { IUserService, UserDto, ActivityDto, IUserRepository, User, ITeamRepository } from "../../core/build/index";
import { Inject, Injectable, ForbiddenException, NotImplementedException, } from '@nestjs/common';
import { UserRepository, TeamRepository } from '../../Infrastructure/build/index';
import { Repository, Connection } from 'typeorm';
@Injectable()
export class UserService extends Repository<User> implements IUserService {
    private readonly teamRepo: ITeamRepository;
    private readonly userRepo: IUserRepository;

    constructor(private readonly connection: Connection) {
        super();
        this.teamRepo = this.connection.getCustomRepository(TeamRepository);
        this.userRepo = this.connection.getCustomRepository(UserRepository);
    }
    async createUser(userDto: UserDto) {
        const user = new User();
        user.name = userDto.name;
        user.team = await this.teamRepo.findBy(userDto.teamid);
        return this.userRepo.addUser(user);
    }
    async getAllUsers(): Promise<any[]> {
        throw new NotImplementedException();
    }

}