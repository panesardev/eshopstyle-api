import { Request, Response, Router } from "express";
import { Category, PRODUCTS } from "../types/product";

export class ProductsController {
  private router = Router();

  getRouter() {
    this.router.get('/', this.findAll);
    this.router.get('/:id', this.find);
    return this.router;
  }

  private async findAll(request: Request, response: Response) {
    response.json(PRODUCTS);
  }

  private async find(request: Request, response: Response) {
    const id = request.params.id;
    const product = PRODUCTS.find(p => p.id === id);
    response.json(product);
  }

  private async findByCategory(request: Request, response: Response) {
    const category = request.params.category as Category;
    const products = PRODUCTS.filter(product => product.category === category);
    response.json(products);
  }

} 
