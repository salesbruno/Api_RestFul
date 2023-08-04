import { container } from 'tsyringe'
import { ListUsersUseCase } from './ListUsersUseCase'
import { Request, Response } from 'express'
import { instanceToInstance } from 'class-transformer'

export class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)
    const page =
      req.query.page && Number(req.query.page) > 0 ? Number(req.query.page) : 1
    const limit =
      req.query.limit && Number(req.query.limit) > 0
        ? Number(req.query.limit)
        : 15

    const users = await listUsersUseCase.execute({ page, limit })
    return res.json(instanceToInstance(users))
  }
}
