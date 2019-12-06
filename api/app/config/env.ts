import env from 'dotenv';

env.config();

export class Env {
  public static get(e: any): any {
    return process.env[e];
  }
}