import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ShowProfileUseCase } from './ShowProfileUseCase'

export class ShowProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const showProfileUseCase = container.resolve(ShowProfileUseCase)
    const userId = req.user.id
    const user = await showProfileUseCase.execute({
      userId,
    })
    return res.json(instanceToInstance(user))
  }
}
