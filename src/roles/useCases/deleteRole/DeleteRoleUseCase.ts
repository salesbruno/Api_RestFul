import { Role } from '@roles/entities/Role'
import { RoleRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type DeleteRoleParams = {
  id: string
}

export class DeleteRoleUseCase {
  constructor(private rolesRepository: RoleRepository) {}

  async execute({ id }: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    await this.rolesRepository.delete(role)
  }
}
