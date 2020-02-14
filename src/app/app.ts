import { Application } from 'https://deno.land/x/oak/mod.ts'

import { APP_HOST, APP_PORT } from '../config/config'
import router from '../routes/routes'
import notFound from './handlers/notFound.ts'
import errorMiddleware from './middlewares/error.ts'

const app = new Application()

app.use(errorMiddleware)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(notFound)

await app.listen(`${APP_HOST}:${APP_PORT}`)