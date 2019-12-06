import { Router } from 'express';
import { IndexController } from '../controllers/index';

export class RouterApp {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', (req, res) => new IndexController().index(req, res));
  }
}