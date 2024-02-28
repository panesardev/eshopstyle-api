import { Request, Response, Router } from "express";
import { CATEGORIES, PRODUCTS } from "../types/product";

export class CategoriesController {
  private router = Router();

  getRouter() {
    this.router.get('/', this.findAll);
    this.router.get('/:id', this.findByCategory);
    return this.router;
  }

  private async findAll(request: Request, response: Response) {
    response.json(CATEGORIES);
  }

  private async findByCategory(request: Request, response: Response) {
    const id = Number(request.params.id);
    const products = PRODUCTS.filter(p => p.categoryId === id);
    response.json(products);
  }

}