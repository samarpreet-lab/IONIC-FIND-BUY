import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AddProductPage implements OnInit {
  public product = {
    name: '',
    description: '',
    category: '',
    subcategory: '',
    sku: '',
    availability: 'In Stock',
    price: null,
    quantity: null,
    showAtLocation: false,
    publicListing: false,
    images: []
  };

  constructor() { }

  ngOnInit() {
  }

  public publishProduct(): void {
    console.log('Publishing product:', this.product);
    // Add your product publish logic here
  }

  public saveDraft(): void {
    console.log('Saving product as draft:', this.product);
    // Add your draft save logic here
  }

}
