import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electronics',
  templateUrl: 'electronics.page.html',
  styleUrls: ['electronics.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class ElectronicsPage {

  // Category info
  categoryInfo = {
    name: 'Electronics',
    icon: 'tv-outline',
    itemCount: '1.2k+ items',
    description: 'Find TVs, laptops, home appliances, and electronic gadgets'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'tv-audio', name: 'TV & Audio', active: false },
    { id: 'computers', name: 'Computers', active: false },
    { id: 'appliances', name: 'Appliances', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: '55" Smart LED TV',
      shop: 'Electronics World',
      price: '₹45,999',
      originalPrice: '₹55,999',
      image: 'assets/smart-tv.webp',
      rating: 4.5,
      distance: '0.6 km',
      inStock: true,
      discount: '18% OFF'
    },
    {
      id: 2,
      name: 'Gaming Laptop',
      shop: 'Tech Store',
      price: '₹75,999',
      originalPrice: '₹85,999',
      image: 'assets/gaming-laptop.jpg',
      rating: 4.7,
      distance: '0.9 km',
      inStock: true,
      discount: '12% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Electronics World',
      type: 'Electronics Store',
      distance: '0.6 km',
      image: 'assets/electronics-world.avif',
      tags: ['TVs', 'Audio Systems'],
      rating: 4.4,
      isOpen: true,
      offers: ['Extended Warranty', 'Free Installation']
    },
    {
      id: 2,
      name: 'Tech Store',
      type: 'Computer & Laptop',
      distance: '0.9 km',
      image: 'assets/tech-store.jpg',
      tags: ['Laptops', 'Gaming'],
      rating: 4.6,
      isOpen: true,
      offers: ['Student Discount', 'Trade-in Bonus']
    },
    {
      id: 3,
      name: 'Home Appliances Hub',
      type: 'Appliances Store',
      distance: '1.3 km',
      image: 'assets/appliances-hub.avif',
      tags: ['Refrigerator', 'Washing Machine'],
      rating: 4.2,
      isOpen: false,
      offers: ['EMI Options', 'Free Delivery']
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