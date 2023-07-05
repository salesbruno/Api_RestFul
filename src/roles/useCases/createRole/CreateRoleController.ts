import { RoleRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body
    const role = await this.createRoleUseCase.execute({ name })

    return res.status(201).json(role)
  }
}
