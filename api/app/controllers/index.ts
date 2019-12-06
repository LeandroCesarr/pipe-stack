import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';

export class IndexController {


  public async index(req: Request, res: Response): Promise<Response> {
    const users = await UserRepository.getUserById(2);

    return res.send(users);
  }
}