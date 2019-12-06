import { Sequelize } from 'sequelize';
import { Env } from './env';

export class Database {
  public sequelize: Sequelize = new Sequelize('sequelize', Env.get('DB_USER'), Env.get('DB_PASSWORD'), {
    host: '127.0.0.1',
    dialect: 'mysql',
  });

  /**
   * init
   */
  init(): void {
    this.sequelize.authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(err => console.error('Unable to connect to the database:', err))
  }
}