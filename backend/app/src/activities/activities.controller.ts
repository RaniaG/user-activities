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
        const userAct = await this.userActivitiesService.createUserActivity(activityDto);
        if (activityDto.action == "end")
            await this.userActivitiesService.createUserActivityDurations(activityDto);
        this.activitiesGateway.emitEvent("message", {
            user: userAct.user.name,
            sessionId: userAct.sessionId,
            timeStamp: userAct.timeStamp,
            action: userAct.action,
            activity: userAct.activity.name
        });
    }
}
