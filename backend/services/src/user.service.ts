import { IUserService, UserDto, ActivityDto, User, Team } from "../../core/build/index";
import { Inject, Injectable, ForbiddenException, NotImplementedException, } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService extends Repository<User> implements IUserService {
    constructor(@InjectRepository(Team) private readonly teamRepo: Repository<Team>,
        @InjectRepository(User) private readonly userRepo: Repository<User>) {
        super();
    }
    async createUser(userDto: UserDto): Promise<any> {
        const user = new User();
        user.name = userDto.name;
        const team = await this.teamRepo.findOne(userDto.teamid);
        if (team)
            user.team = team;
        return this.userRepo.insert(user);
    }
    async getAllUsers(): Promise<any[]> {
        return this.userRepo.find();
    }
    async getUsersCount(): Promise<number> {
        return this.userRepo.count();
    }

}