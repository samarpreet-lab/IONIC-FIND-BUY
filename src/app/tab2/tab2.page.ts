import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class Tab2Page {

  // Comprehensive Products Array for ngFor
  products = [
    {
      id: 1,
      name: 'Samsung Galaxy S24',
      description: 'Latest flagship smartphone with advanced camera',
      price: 45000,
      originalPrice: 50000,
      rating: 4.5,
      shopName: 'TechHub Electronics',
      distance: '1.2 km',
      image: 'assets/s24.webp',
      isAvailable: true,
      isFavorite: false,
      category: 'electronics',
      tags: ['smartphone', 'android', 'flagship']
    },
    {
      id: 2,
      name: 'Fresh Basmati Rice 5kg',
      description: 'Premium quality basmati rice, aged for perfect aroma',
      price: 650,
      originalPrice: 750,
      rating: 4.3,
      shopName: 'Sharma General Store',
      distance: '0.8 km',
      image: 'assets/rice.webp',
      isAvailable: true,
      isFavorite: true,
      category: 'grocery',
      tags: ['rice', 'basmati', 'premium']
    },
    {
      id: 3,
      name: 'Nike Air Max Sneakers',
      description: 'Comfortable running shoes with air cushioning',
      price: 8500,
      originalPrice: 9500,
      rating: 4.6,
      shopName: 'SportZone',
      distance: '2.1 km',
      image: 'assets/nike.avif',
      isAvailable: false,
      isFavorite: false,
      category: 'footwear',
      tags: ['nike', 'sneakers', 'sports']
    },
    {
      id: 4,
      name: 'Fresh Milk 1L',
      description: 'Pure cow milk, delivered fresh daily from local farms',
      price: 55,
      originalPrice: 60,
      rating: 4.8,
      shopName: 'Daily Dairy',
      distance: '0.5 km',
      image: 'assets/milk.webp',
      isAvailable: true,
      isFavorite: false,
      category: 'dairy',
      tags: ['milk', 'fresh', 'organic']
    },
    {
      id: 5,
      name: 'Masala Chai Tea',
      description: 'Authentic Indian spiced tea blend, perfect for morning brew',
      price: 85,
      originalPrice: 95,
      rating: 4.4,
      shopName: 'Gupta Tea Corner',
      distance: '1.5 km',
      image: 'assets/tea.jpg',
      isAvailable: true,
      isFavorite: true,
      category: 'beverages',
      tags: ['chai', 'masala', 'spiced']
    },
    {
      id: 6,
      name: 'Chicken Curry Cut 1kg',
      description: 'Fresh chicken pieces, cleaned and cut for curry',
      price: 320,
      originalPrice: 350,
      rating: 4.2,
      shopName: 'Gupta Meat Corner',
      distance: '1.6 km',
      image: 'assets/chicken.jpeg',
      isAvailable: true,
      isFavorite: false,
      category: 'meat',
      tags: ['chicken', 'fresh', 'halal']
    }
  ];

  constructor() { }



  // Toggle favorite status for a product
  toggleFavorite(productId: number, event: Event) {
    event.stopPropagation();
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.isFavorite = !product.isFavorite;
    }
  }

  // Get status color based on availability
  getStatusColor(isAvailable: boolean): string {
    return isAvailable ? 'success' : 'danger';
  }

  // Get status text based on availability
  getStatusText(isAvailable: boolean): string {
    return isAvailable ? 'Available' : 'Out of Stock';
  }

}
