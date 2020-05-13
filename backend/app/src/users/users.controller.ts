import { Controller, Post, Body, Get, Param, Put, Inject } from '@nestjs/common';
import { UserDto, IUserService } from '../../../core/build/index';

@Controller('users')
export class UsersController {
    constructor(@Inject('IUserService') private userService: IUserService) {
    }
    @Post()
    createUser(@Body() createUserDto: UserDto) {
        return this.userService.createUser(createUserDto);
    }
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

}
