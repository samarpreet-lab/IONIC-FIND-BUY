import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddProductPage implements OnInit {
  public newProduct = {
    name: '',
    price: null,
    description: '',
    inStock: true
  };

  constructor() { }

  ngOnInit() {
  }

  public saveProduct(): void {
    console.log('Saving product:', this.newProduct);
  }

}
