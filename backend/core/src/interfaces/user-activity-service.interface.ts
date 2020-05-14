import { ActivityDto } from "../dtos/activity.dto";

export interface IUserActivityService {
    createUserActivity(activityDto: ActivityDto): any;
    createUserActivityDurations(userActivity: ActivityDto): Promise<any>;
    getUserActivities(): Promise<any[]>;
    getUserActivitiesDurations(): Promise<any[]>;
    getUserActivitiesDurationsBySession(): Promise<any[]>;
    getActivities(): Promise<any[]>;

}