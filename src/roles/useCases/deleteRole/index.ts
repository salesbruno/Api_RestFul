import { RoleRepository } from '@roles/repositories/RolesRepository'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'
import { DeleteRoleController } from './DeleteRoleController'

const rolesRepository = RoleRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)
export const deleteRolesController = new DeleteRoleController(deleteRoleUseCase)
