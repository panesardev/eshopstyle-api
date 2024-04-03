import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { IndexController } from './controllers/index.controller';
import { ProductsController } from './controllers/products.controller';

require('dotenv').config();

export class App {
  private static instance: App;
  private express = express();

  static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  private setControllers() {
    this.express.use('/', new IndexController().router);
    this.express.use('/products', new ProductsController().router);
  }

  run(port: number) {
    this.getExpress().listen(port, () =>
      console.log(`Express running at PORT:${port}`),
    );
  }

  getExpress() {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(express.json());

    this.setControllers();

    return this.express;
  }

}