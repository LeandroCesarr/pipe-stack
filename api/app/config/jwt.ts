import { Env } from './env';
import jwt from 'jsonwebtoken';

export class JwtConfig {
  public secret: any = Env.get('JWT_SECRET');

  /**
   * @Author: Leandro C. Silva
   * @Date: 2019-12-06 13:29:03
   * @Desc: Generate jsonwentoken
   * @param {Object}
   * @return {String}
   */
  public async generate(params: Object): Promise<String> {
    return await jwt.sign(params, this.secret, {
      expiresIn: 86400,
    })
  }
}