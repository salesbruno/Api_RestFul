import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRolesController } from '@roles/useCases/showRole'
import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  return listRolesController.handle(req, res)
})

rolesRouter.get('/:id', (req, res) => {
  return showRolesController.handle(req, res)
})

export { rolesRouter }
