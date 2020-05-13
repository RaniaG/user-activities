import { ActivityDto } from '../dtos/activity.dto';


export interface ITeamActivityService {
    createTeamActivity(logActivityActionDto: ActivityDto): any;
    createTeamActivityDurations(logActivityActionDto: ActivityDto): any;
    getTeamActivitiesDurations(): any[];
}