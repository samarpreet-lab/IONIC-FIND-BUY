import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductsPage implements OnInit {
  public myProducts = [
    { id: 'p1', name: 'Samsung Galaxy S24', price: 45000, inStock: true },
    { id: 'p2', name: 'Gaming Laptop', price: 85000, inStock: true },
    { id: 'p3', name: 'Smart TV', price: 22000, inStock: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public addProduct(): void {
    this.router.navigate(['/shop-owner/add-product']);
  }

  public editProduct(productId: string): void {
    console.log('Editing product:', productId);
  }

  public toggleStock(product: any): void {
    console.log('Toggling stock for:', product.name);
  }

}
