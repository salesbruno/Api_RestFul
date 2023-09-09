import { Role } from '@roles/entities/Role'
import { User } from '@users/entities/User'
import { DataSource } from 'typeorm'
import { CreateRolesTable1688398469454 } from './migrations/1688398469454-CreateRolesTable'
import { CreateUsersTable1689893194624 } from './migrations/1689893194624-CreateUsersTable'
import { AddRoleIdToUsersTable1689895295839 } from './migrations/1689895295839-AddRoleIdToUsersTable'
import { CreateRefreshTokensTable1694286668460 } from './migrations/1694286668460-CreateRefreshTokensTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1688398469454,
    CreateUsersTable1689893194624,
    AddRoleIdToUsersTable1689895295839,
    ,
    CreateRefreshTokensTable1694286668460,
  ],
})
