import { ActivityDto } from "../dtos/activity.dto";
import { ActivityDurationDto } from "../dtos/activity.duration.dto";

export interface IUserActivityService {
    createUserActivity(activityDto: ActivityDto): any;
    createUserActivityDurations(activityDurationDto: ActivityDurationDto): any;
    getUserActivities(): Promise<any[]>;
    getUserActivitiesDurations(): any[];
}