import { RoleRepository } from '@roles/repositories/RolesRepository'
import { createRolesController } from '@roles/useCases/createRole'
import { Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RoleRepository()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})

export { rolesRouter }
