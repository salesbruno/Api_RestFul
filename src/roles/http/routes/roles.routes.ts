import { createRolesController } from '@roles/useCases/createRole'
import { deleteRolesController } from '@roles/useCases/deleteRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRolesController } from '@roles/useCases/showRole'
import { updateRolesController } from '@roles/useCases/updateRole'
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

rolesRouter.put('/:id', (req, res) => {
  return updateRolesController.handle(req, res)
})

rolesRouter.delete('/:id', (req, res) => {
  return deleteRolesController.handle(req, res)
})
export { rolesRouter }
