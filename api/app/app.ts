import express from 'express';
import { RouterApp } from './routes/router';
import { Database } from './config/database';
import bodyParser from 'body-parser';
import { NormalizePort } from './config/port';
import notifier from 'node-notifier';

class App {
  public app: express.Application;
  public port: Number | Boolean;

  constructor() {
    this.app = express();
    this.port = NormalizePort.init(process.env.PORT || 4000)
  }

  private config(): void {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use('/api/v1/', new RouterApp().router);
  }

  private listen(port: Number): void {
    this.app.listen(port, () => notifier.notify({
      title: `Listening on: ${this.port}`,
      message: "Build successfull"
    }));
  }

  private DatabaseConfig(): void {
    new Database().init();
  }

  public start(): void {
    this.config();
    this.DatabaseConfig();
    this.listen(4000);
  }
}


new App().start();