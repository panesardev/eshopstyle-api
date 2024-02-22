import { Request, Response, Router } from "express";
import axios from 'axios';
import { Product, ProductResponse } from "../types/product";

const URL = 'https://dummyjson.com/products';

export class ProductsController {
  private router = Router();

  getRouter() {
    this.router.get('/', this.findAll);
    this.router.get('/:id', this.find);
    this.router.get('/categories', this.findCategories);
    this.router.get('/category/:category', this.findByCategory);
    return this.router;
  }

  async findAll(request: Request, response: Response) {
    const result = await axios.get<ProductResponse>(URL);
    response.json(result.data.products);
  }

  async find(request: Request, response: Response) {
    const id = Number(request.params['id']);
    const result = await axios.get<Product>(`${URL}/${id}`);
    response.json(result.data);
  }

  async findCategories(request: Request, response: Response) {
    const result = await axios.get<string[]>(`${URL}/categories`);
    response.json(result.data);
  }

  async findByCategory(request: Request, response: Response) {
    const category = String(request.params['category']);
    const result = await axios.get<ProductResponse>(`${URL}/category/${category}`);
    response.json(result.data.products);
  }

} 
