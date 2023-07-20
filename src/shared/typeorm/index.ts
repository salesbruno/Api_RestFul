import { DataSource } from 'typeorm'
import { CreateRolesTable1688398469454 } from './migrations/1688398469454-CreateRolesTable'
import { Role } from '@roles/entities/Role'
import { CreateUsersTable1689893194624 } from './migrations/1689893194624-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1688398469454, CreateUsersTable1689893194624],
})
