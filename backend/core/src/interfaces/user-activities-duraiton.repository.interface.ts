import { UserActivitiesDuration } from "../entities/user-activities-duration.entity";

export interface IUserActivitiesDurationRepository {

    add(userAct: UserActivitiesDuration): any;
    getAll(): Promise<UserActivitiesDuration[]>;
}