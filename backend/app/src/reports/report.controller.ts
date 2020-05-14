import { Controller, Post, Body, Get, Param, Inject, Res, HttpStatus } from '@nestjs/common';
import { ITeamActivityService, IUserActivityService, IUserService, ITeamService } from '../../../core/build/index'

@Controller('reports')
export class ReportController {

    constructor(
        @Inject('ITeamActivityService')
        private teamActService: ITeamActivityService,
        @Inject('IUserActivityService')
        private userActService: IUserActivityService,
        @Inject("ITeamService") private readonly teamService: ITeamService,
        @Inject('IUserService') private userService: IUserService) { }


    @Get('/teams')
    async getTeams() {
        return this.teamActService.getTeamActivitiesDurations();
    }

    @Get('/users')
    async getUsers() {
        const userSessionData = await this.userActService.getUserActivitiesDurationsBySession();
        const userData = await this.userActService.getUserActivitiesDurations();
        const uniqueActivities = await this.userActService.getActivities();
        const uniqueUsers = await this.userService.getAllUsers();
        return {
            userSessionData, userData, uniqueActivities, uniqueUsers
        };
    }

    @Get("/dashboard")
    async getDashboard() {
        const teamsCount = await this.teamService.getTeamsCount();
        const usersCount = await this.userService.getUsersCount();
        const dashboardData = await this.userActService.getUserActivities();
        return {
            teamsCount, usersCount, dashboardData
        }
    }
}
