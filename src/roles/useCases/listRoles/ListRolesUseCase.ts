import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RolesRepository'

export class ListRolesUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
