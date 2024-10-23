import { Request, Response, Router } from "express";
import { products } from "./product.data";

export namespace ProductRouter {
  export const router = Router();

  router.get('/', (request: Request, response: Response) => response.json(products));

  router.get('/:id', (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const product = products.find(p => p.id === id);
    response.json(product);
  });
} 
