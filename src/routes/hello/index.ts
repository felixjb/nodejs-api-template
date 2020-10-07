import {Request, Response, Router} from 'express'

const helloRouter = Router()

helloRouter.get(
  '/',
  (_req: Request, res: Response): Response => res.send({message: 'Hello world!'})
)

export {helloRouter}
