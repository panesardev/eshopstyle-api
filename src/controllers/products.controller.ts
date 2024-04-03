import { Request, Response, Router } from "express";
import { Category, products } from "../types/product";

export class ProductsController {
  readonly router = Router();

  constructor() {
    this.router.get('/', this.findAll);
    this.router.get('/:id', this.find);
    this.router.get('/category/:category', this.findByCategory);
  }

  async findAll(request: Request, response: Response) {
    response.json(products);
  }

  async find(request: Request, response: Response) {
    const id = request.params.id;
    const product = products.find(p => p.id === id);
    response.json(product);
  }

  async findByCategory(request: Request, response: Response) {
    const category = request.params.category as Category;
    const categoryProducts = products.filter(p => p.category === category);
    response.json(categoryProducts);
  }
} 
