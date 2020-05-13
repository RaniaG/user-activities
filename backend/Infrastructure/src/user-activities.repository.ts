import { Repository } from "typeorm";
import { IUserActivitiesRepository, UserActivities } from "../../core/build/index";


export class UserActivitiesRepository extends Repository<UserActivities> implements IUserActivitiesRepository {
    add(userAct: UserActivities) {
        return this.insert(userAct);
    }
    getOne(predicate: Function): Promise<UserActivities> {
        return this.getOne(predicate);
    }
    getAll(): Promise<UserActivities[]> {
        return this.getAll();
    }

}