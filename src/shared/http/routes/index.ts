import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá Dev!' })
})

routes.use('/roles', rolesRouter)
export { routes }
