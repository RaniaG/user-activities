import { IUserRepository, User } from '../../core/build/index'
import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository {
    addUser(user: User) {
        return this.insert(user);
    }
    getUserCount(): Promise<number> {
        return this.count();
    }

}