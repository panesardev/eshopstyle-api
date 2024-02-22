import { Request, Response, Router } from "express";
import { AppDataSource } from "../database";
import { User } from "../entities/user";

export class UsersController {
  private router = Router();
  private usersRepository = AppDataSource.getRepository(User);

  getRouter() {
    this.router.get('/', this.findAll);
    this.router.post('/', this.create);
    return this.router;
  }

  private async findAll(request: Request, response: Response) {
    response.json(await this.usersRepository.find());
  }

  private async create(request: Request, response: Response) {
    const user = request.body;
    const savedUser = await this.usersRepository.save(user);
    response.json(savedUser);
  } 
} 
