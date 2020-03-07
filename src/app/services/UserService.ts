import { User } from '../models/User';

class UserService {
    public async create(userData: User): Promise<void> {
        return await UserRepository.create(userData)
    }
}

export default new UserService()