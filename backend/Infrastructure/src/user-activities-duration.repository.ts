import { Repository } from "typeorm";
import { UserActivitiesDuration, IUserActivitiesDurationRepository } from "../../core/build/index";


export class UserActivitiesDurationRepository extends Repository<UserActivitiesDuration> implements IUserActivitiesDurationRepository {
    add(userAct: UserActivitiesDuration) {
        return this.insert(userAct);
    }
    getAll(): Promise<UserActivitiesDuration[]> {
        return this.getAll();
    }

}