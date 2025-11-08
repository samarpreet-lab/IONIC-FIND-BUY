import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  /**
   * Get all products from the in-memory database
   */
  public getProducts(): Product[] {
    return this.products;
  }

  /**
   * Add a new product with a generated unique ID
   */
  public addProduct(productData: Omit<Product, 'id'>): Product {
    const id = this.generateId();
    const newProduct: Product = {
      id,
      ...productData
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Delete a product by ID
   */
  public deleteProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  /**
   * Get a single product by ID
   */
  public getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  /**
   * Generate a unique ID for a new product
   */
  private generateId(): string {
    return `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
