import 'reflect-metadata';
import { DataSource } from "typeorm";
import { User } from './entities/user';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_URL,
  synchronize: true,
  entities: [User],
});

