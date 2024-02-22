import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { UsersController } from './controllers/users.controller';
import { IndexController } from './controllers/index.controller';
import { AppDataSource } from './database';

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

    this.initializeDatabase();
    this.useControllers();

    return this.express;
  }

  async initializeDatabase() {
    await AppDataSource.initialize().catch(e => console.log(e));
  }

  private useControllers() {
    this.express.use('/', new IndexController().getRouter());
    this.express.use('/users', new UsersController().getRouter());
  }

}