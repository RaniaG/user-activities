import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { ActivityDto, IUserActivityService } from '../../../core/build/index';
import { ActivitiesGateway } from './activities.gateway';

@Controller('activities')
export class ActivitiesController {

    constructor(private readonly activitiesGateway: ActivitiesGateway,
        @Inject('IUserActivityService') private readonly userActivitiesService: IUserActivityService) {

    }

    @Post()
    async logActivityAction(@Body() activityDto: ActivityDto) {
       await this.userActivitiesService.createUserActivity(activityDto);
        this.activitiesGateway.emitEvent("message", activityDto);
    }
    @Get('getSessionActivitiesDurations/:groupType')//teams or users
    getSessionActivitiesDurations(@Param() groupType: string) {
        
    }

    @Get('getTeamActivitiesDurations')
    getTeamActivitiesDurations() {

    }
    @Get('getAll')
    getAllActivities() {
        return this.userActivitiesService.getUserActivities();
    }
}
