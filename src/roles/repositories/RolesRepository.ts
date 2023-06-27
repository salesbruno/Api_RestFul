import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}

export class RoleRepository {
  private roles: Role[]
  private static INSTANCE: RoleRepository

  private constructor() {
    this.roles = []
  }

  public static getInstance(): RoleRepository {
    if (!RoleRepository.INSTANCE) {
      RoleRepository.INSTANCE = new RoleRepository()
    }
    return RoleRepository.INSTANCE
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role()

    Object.assign(role, {
      name,
      created_at: new Date(),
    })

    this.roles.push(role)
    return role
  }

  findAll(): Role[] {
    return this.roles
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name == name)
  }
}
