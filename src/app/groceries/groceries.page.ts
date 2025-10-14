import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groceries',
  templateUrl: 'groceries.page.html',
  styleUrls: ['groceries.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class GroceriesPage {

  // Category info
  categoryInfo = {
    name: 'Groceries',
    icon: 'basket-outline',
    itemCount: '3.1k+ items',
    description: 'Fresh vegetables, fruits, daily essentials, and grocery items'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'vegetables', name: 'Vegetables', active: false },
    { id: 'fruits', name: 'Fruits', active: false },
    { id: 'dairy', name: 'Dairy', active: false },
    { id: 'staples', name: 'Staples', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: 'Fresh Vegetables Combo',
      shop: 'Green Mart',
      price: '₹299',
      originalPrice: '₹350',
      image: 'assets/vegetable-combo.avif',
      rating: 4.8,
      distance: '0.2 km',
      inStock: true,
      discount: '15% OFF'
    },
    {
      id: 2,
      name: 'Organic Fruits Box',
      shop: 'Fresh Fruits Co.',
      price: '₹599',
      originalPrice: '₹699',
      image: 'assets/fruit-box.avif',
      rating: 4.6,
      distance: '0.4 km',
      inStock: true,
      discount: '14% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Green Mart',
      type: 'Vegetable Store',
      distance: '0.2 km',
      image: 'assets/green-mart.avif',
      tags: ['Fresh Vegetables', 'Organic'],
      rating: 4.7,
      isOpen: true,
      offers: ['Daily Fresh Stock', 'Home Delivery']
    },
    {
      id: 2,
      name: 'Fresh Fruits Co.',
      type: 'Fruit Shop',
      distance: '0.4 km',
      image: 'assets/fresh-fruits.webp',
      tags: ['Seasonal Fruits', 'Imported'],
      rating: 4.5,
      isOpen: true,
      offers: ['Bulk Orders', 'Gift Baskets']
    },
    {
      id: 3,
      name: 'Daily Needs Store',
      type: 'Grocery Store',
      distance: '0.5 km',
      image: 'assets/daily-needs.avif',
      tags: ['All Essentials', '24x7'],
      rating: 4.3,
      isOpen: true,
      offers: ['Membership Discount', 'Quick Delivery']
    },
    {
      id: 4,
      name: 'Pure Dairy Farm',
      type: 'Dairy Products',
      distance: '0.8 km',
      image: 'assets/pure-dairy.avif',
      tags: ['Fresh Milk', 'Organic'],
      rating: 4.6,
      isOpen: false,
      offers: ['Subscription Plans', 'Morning Delivery']
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