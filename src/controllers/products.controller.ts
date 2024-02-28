import { Request, Response, Router } from "express";
import { PRODUCTS, CATEGORIES } from "../types/product";

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
    console.log(id);
    
    const product = PRODUCTS.find(p => p.id === id);
    response.json(product);
  }

} 
