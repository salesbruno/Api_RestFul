import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RoleRepository } from '@roles/repositories/RolesRepository'
import { container } from 'tsyringe'

container.registerSingleton<IRolesRepository>('RolesRepository', RoleRepository)
