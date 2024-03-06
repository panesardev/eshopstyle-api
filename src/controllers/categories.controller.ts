import { Request, Response, Router } from "express";
import { Category, PRODUCTS } from "../types/product";

export class CategoriesController {
  private router = Router();

  getRouter() {
    this.router.get('/:category', this.findByCategory);
    return this.router;
  }

  private async findByCategory(request: Request, response: Response) {
    const category = request.params.category as Category;
    const products = PRODUCTS.filter(product => product.category === category);
    response.json(products);
  }

}