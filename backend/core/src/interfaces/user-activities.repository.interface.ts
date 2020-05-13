import { UserActivities } from "../entities/user-activities.entity";

export interface IUserActivitiesRepository {

    add(userAct: UserActivities): any;
    getOne(predicate: Function): Promise<UserActivities>;
    getAll(): Promise<UserActivities[]>;
}