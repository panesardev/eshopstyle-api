import { Request, Response, Router } from "express";
import { PRODUCTS, CATEGORIES } from "../types/product";

export class ProductsController {
  private router = Router();

  getRouter() {
    this.router.get('/', this.findAll);
    this.router.get('/:id', this.find);
    this.router.get('/categories', this.findCategories);
    this.router.get('/category/:category', this.findByCategory);
    return this.router;
  }

  private async findAll(request: Request, response: Response) {
    response.json(PRODUCTS);
  }

  private async find(request: Request, response: Response) {
    const id = request.params['id'];
    const product = PRODUCTS.find(p => p.id === id);
    response.json(product);
  }

  private async findCategories(request: Request, response: Response) {
    response.json(CATEGORIES);
  }

  private async findByCategory(request: Request, response: Response) {
    const category = Number(request.params['category']);
    const products = PRODUCTS.filter(p => p.categoryId === category);
    response.json(products);
  }

} 
