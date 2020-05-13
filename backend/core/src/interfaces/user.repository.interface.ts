import { User } from "../entities/user.entity";

export interface IUserRepository {

    addUser(user: User): any;
    getUserCount(): Promise<number>;

}