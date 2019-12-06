import jwt from 'jsonwebtoken';
import { JwtConfig } from '../config/jwt';
import { Request, Response, NextFunction } from 'express';

export class AuthMiddleware {

  /**
   * @Author: Leandro C. Silva
   * @Date: 2019-12-06 13:30:46
   * @Desc: Autenticate request
   * @param {Request, Response, Next}
   * @return {void}
   */
  public static async verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.send({ status: 401, error: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (parts.length < 2) {
      return res.send({ status: 401, error: 'Token error' });
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      res.send({ status: 401, error: 'Token malformatted' });
    }

    try {
      const response = await jwt.verify(token, new JwtConfig().secret);
      req.token = response.token;
      next();
    } catch (err) {
      res.send(err);
    }
  }
}