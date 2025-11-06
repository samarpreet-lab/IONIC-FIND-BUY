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
  public searchTerm: string = '';
  public categories = ['Bread', 'Pastries', 'Beverages'];

  public myProducts = [
    {
      id: 'p1',
      name: 'Signature Sourdough',
      category: 'Bread',
      price: 5.99,
      image: 'assets/images/sourdough.jpg',
      inStock: true,
      stock: 6,
      hasSale: false
    },
    {
      id: 'p2',
      name: 'Butter Croissant',
      category: 'Pastry',
      price: 3.25,
      image: 'assets/images/croissant.jpg',
      inStock: true,
      stock: 12,
      hasSale: false
    },
    {
      id: 'p3',
      name: 'Chocolate Chip Cookie',
      category: 'Pastry',
      price: 2.50,
      image: 'assets/images/cookie.jpg',
      inStock: true,
      stock: 8,
      hasSale: true
    },
    {
      id: 'p4',
      name: 'House Latte',
      category: 'Beverage',
      price: 4.00,
      image: 'assets/images/latte.jpg',
      inStock: false,
      stock: 0,
      hasSale: false
    }
  ];

  public showSearch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public addProduct(): void {
    this.router.navigate(['/shop-owner/add-product']);
  }

  public editProduct(productId: string): void {
    console.log('Editing product:', productId);
    this.router.navigate(['/shop-owner/edit-product', productId]);
  }

  public hideProduct(productId: string): void {
    console.log('Hiding product:', productId);
  }

  public archiveProduct(productId: string): void {
    console.log('Archiving product:', productId);
  }

  public toggleStock(product: any): void {
    console.log('Toggling stock for:', product.name);
  }

  public onSearchClicked(): void {
    // Toggle a simple inline search state for now – can be expanded to open a modal
    this.showSearch = !this.showSearch;
    console.log('Search clicked, showSearch=', this.showSearch);
  }

  public onSearchChange(): void {
    console.log('Searching for:', this.searchTerm);
  }

  public getActiveItemsCount(): number {
    return this.myProducts.filter(p => p.inStock).length;
  }

  public getCategoriesCount(): number {
    return this.categories.length;
  }
}
