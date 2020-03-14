import { User } from '../models/User';

class UserService {
    public async create(userData: User): Promise<void> {
        return await UserRepository.create(userData)
    }

    public async update(userId, userData: User): Promise<void>  {
        return await UserRepository.update(userData)
    }

    public async delete(userId): Promise<void>  {
        return await UserRepository.delete(userId)
    }
}

export default new UserService()