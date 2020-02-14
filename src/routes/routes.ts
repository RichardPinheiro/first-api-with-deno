import { Router } from 'https://deno.land/x/oak/mod.ts'

import UserController from '../app/controllers/UserController'

const router = new Router()

router
  .get('/users', UserController.getUsers)
  .get('/users/:id', UserController.getUserDetails)
  .post('/users', UserController.store)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)

export default router