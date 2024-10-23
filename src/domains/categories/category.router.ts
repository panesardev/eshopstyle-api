import { Request, Response, Router } from "express";
import { categories } from "./category.data";
import { products } from "../products/product.data";

export namespace CategoryRouter {
  export const router = Router();

  router.get('/', (request: Request, response: Response) => response.json(categories));
  
  router.get('/:category', (request: Request, response: Response) => {
    const category = request.params.category;
    const categoryProducts = products.filter(p => p.category === category);
    response.json(categoryProducts);
  });
}
