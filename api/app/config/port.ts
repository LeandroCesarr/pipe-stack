export class NormalizePort {

  /**
   * @Author: Leandro C. Silva
   * @Date: 2019-12-06 13:29:56
   * @Desc: Normalize port from http server
   * @param {any}
   * @return {Number | Boolean}
   */
  static init(val: any): Number | Boolean {
    const port = parseInt(val, 10);

    if (isNaN(port)) return val;
    if (port >= 0) return port;

    return false;
  }
}