import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { IndexController } from './controllers/index.controller';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';

require('dotenv').config();

export class App {
  private static instance: App;
  private express = express();

  public static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
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

    this.useControllers();

    return this.express;
  }

  private useControllers() {
    this.express.use('/', new IndexController().getRouter());
    this.express.use('/products', new ProductsController().getRouter());
    this.express.use('/categories', new CategoriesController().getRouter());
  }

}