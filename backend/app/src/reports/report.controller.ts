import { Controller, Post, Body, Get, Param, Inject, Res, HttpStatus } from '@nestjs/common';
import {IReportService} from '../../../core/build/index'

@Controller('reports')
export class ReportController {

   constructor(
       @Inject('IReportService') 
       private reportService: IReportService){}


    @Get(':groupType')
    getSessionActivitiesDurations(@Param('groupType') groupType : string) {
        if(groupType == 'user'){
            return this.reportService.getUserActivityDurationSum();
        }
        
        else if (groupType == 'team'){
            return this.reportService.getTeamActivityDurationSum();
        }
       
        return [];
        

    }
    @Get()
    getTeamActivitiesDurations() {
        return this.reportService.getTeamActivityDurationSum();
    }
    
}
