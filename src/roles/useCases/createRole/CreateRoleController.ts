import { Request, Response } from 'express'
import { CreateRoleUseCase } from './CreateRoleUseCase'
import { container } from 'tsyringe'

export class CreateRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase)
    const { name } = req.body
    const role = await createRoleUseCase.execute({ name })

    return res.status(201).json(role)
  }
}
