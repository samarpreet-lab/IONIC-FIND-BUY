import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  templateUrl: 'fashion.page.html',
  styleUrls: ['fashion.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class FashionPage {

  // Category info
  categoryInfo = {
    name: 'Fashion',
    icon: 'shirt-outline',
    itemCount: '1.8k+ items',
    description: 'Discover trendy clothing, footwear, and fashion accessories'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'clothing', name: 'Clothing', active: false },
    { id: 'footwear', name: 'Footwear', active: false },
    { id: 'accessories', name: 'Accessories', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: 'Designer Kurta Set',
      shop: 'Fashion Hub',
      price: '₹2,499',
      originalPrice: '₹3,200',
      image: 'assets/kurta-set.webp',
      rating: 4.6,
      distance: '0.3 km',
      inStock: true,
      discount: '22% OFF'
    },
    {
      id: 2,
      name: 'Premium Sneakers',
      shop: 'Shoe Palace',
      price: '₹4,999',
      originalPrice: '₹6,999',
      image: 'assets/sneakers.jpeg',
      rating: 4.4,
      distance: '0.7 km',
      inStock: true,
      discount: '29% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Fashion Hub',
      type: 'Clothing Store',
      distance: '0.3 km',
      image: 'assets/fashion-hub.avif',
      tags: ['Ethnic Wear', 'Western'],
      rating: 4.5,
      isOpen: true,
      offers: ['Buy 2 Get 1 Free', 'Festival Special']
    },
    {
      id: 2,
      name: 'Shoe Palace',
      type: 'Footwear Store',
      distance: '0.7 km',
      image: 'assets/shoe-palace.avif',
      tags: ['Sports Shoes', 'Formal'],
      rating: 4.3,
      isOpen: true,
      offers: ['Exchange Offer', 'Size Exchange']
    },
    {
      id: 3,
      name: 'Style Station',
      type: 'Fashion Accessories',
      distance: '1.1 km',
      image: 'assets/style-station.jpeg',
      tags: ['Bags', 'Watches'],
      rating: 4.2,
      isOpen: false,
      offers: ['Combo Deals', 'Gift Wrapping']
    }
  ];

  constructor() {}

  // Utility methods
  getStatusColor(isOpen: boolean): string {
    return isOpen ? 'success' : 'medium';
  }

  getShopStatus(isOpen: boolean): string {
    return isOpen ? 'Open' : 'Closed';
  }
}