import { RoleRepository } from '@roles/repositories/RolesRepository'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { UpdateRoleController } from './UpdateRoleController'

const rolesRepository = RoleRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRolesController = new UpdateRoleController(updateRoleUseCase)
