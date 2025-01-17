import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { ProductRouter } from './domains/products/product.router';
import { CategoryRouter } from './domains/categories/category.router';

require('dotenv').config();

export class App {
  private static instance: App;
  private express = express();

  static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  private setControllers() {
    this.express.use('/products', ProductRouter.router);
    this.express.use('/categories', CategoryRouter.router);
  }

  run(port: number) {
    this.getExpress().listen(port, () => console.log(`Express running at PORT:${port}`));
  }

  getExpress() {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(express.json());

    this.setControllers();

    return this.express;
  }

}