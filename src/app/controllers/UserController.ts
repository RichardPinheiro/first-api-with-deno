import UserService from '../services/UserService'

class UserController {
    store({ request, response }) {
        if (!request.hasBody) {
            response.status = 400
            response.body = { msg: "Invalid user data" }
            return response
        }

        const { name, role, is_admin } = await request.body()

        if (!name || !role) {
            response.status = 422
            response.body = { error: "Incorrect user data. Name and role are required" }
            return response
        }
        
        const user = await UserService.create({ name, role, is_admin })

        return response.body = { message: "User created", user }
    }

    update({ params, request, response }) {
        const userId = params.id

        if (!userId) {
            response.status = 400
            response.body = { error: "Invalid user id" }
            return response
        }

        if (!request.hasBody) {
            response.status = 400
            response.body = { error: "Invalid user data" }
            return response
        }

        const { name, role, is_admin } = await request.body()

        const user = await UserService.update(userId, { name, role, is_admin })

        return response.body = { message: "User updated", user }
    }

    delete({ params, response }) {
        const userId = params.id

        if (!userId) {
            response.status = 400
            response.body = { error: "Invalid user id" }
            return response
        }

        const user = await UserService.getUser(userId)

        if (!user) {
            response.status = 404
            response.body = { error: `User with ID ${userId} not found` }
            return response
        }

        await UserService.delete(userId)

        return response.body = { message: "User deleted" }
    }

    getUsers({ response }) {
        return response.body = await UserService.getUsers()
    }

    getUserDetails({ params, response }) {
        const userId = params.id

        if (!userId) {
            response.status = 400
            response.body = { error: "Invalid user id" }
            return response
        }
      
        const user = await UserService.getUser(userId)

        if (!user) {
            response.status = 404
            response.body = { error: `User with ID ${userId} not found` }
            return response
        }

        return response.body = user
    }
}

export default new UserController()
