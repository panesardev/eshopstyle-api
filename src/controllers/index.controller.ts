import { Request, Response, Router } from "express";

export class IndexController {
  readonly router = Router();

  constructor() {
    this.router.get('/', this.index);
  }

  async index(request: Request, response: Response) {
    const message = {
      visit: 'https://eshopstyle.vercel.app',
    };
    response.json(message);
  }
}