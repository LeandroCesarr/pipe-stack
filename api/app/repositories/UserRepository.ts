import { User } from "../models/User";

export class UserRepository {

  /**
   * @Author: Leandro C. Silva
   * @Date: 2019-12-05 14:03:09
   * @Desc: get user from id
   * @param {number}
   * @return {Object}
   */
  public static async getUserById(id : number | string) : Promise<Object | any>
  {
    const user = await User.findOne({ where: { id } });

    return user;
  }
}