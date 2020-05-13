import { UserDto } from "../dtos/user.dto";

export interface IUserService {
    createUser(userDto: UserDto): any;
    getAllUsers(): Promise<any[]> ;
}