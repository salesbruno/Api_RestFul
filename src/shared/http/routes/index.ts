import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'
import { usersRouter } from '@users/http/users.routes'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá Dev!' })
})

routes.use('/roles', rolesRouter)
routes.use('/users', usersRouter)
export { routes }
