import { Request, Response } from 'express'
import { ListRolesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const page =
      req.query.page && Number(req.query.page) > 0 ? Number(req.query.page) : 1
    const limit =
      req.query.limit && Number(req.query.limit) > 0
        ? Number(req.query.limit)
        : 15

    const roles = await this.listRolesUseCase.execute({ page, limit })
    return res.json(roles)
  }
}
