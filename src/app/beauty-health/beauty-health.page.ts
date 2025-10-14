import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beauty-health',
  templateUrl: 'beauty-health.page.html',
  styleUrls: ['beauty-health.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class BeautyHealthPage {

  // Category info
  categoryInfo = {
    name: 'Beauty & Health',
    icon: 'heart-outline',
    itemCount: '1.7k+ items',
    description: 'Skincare, makeup, wellness products, and health supplements'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'skincare', name: 'Skincare', active: false },
    { id: 'makeup', name: 'Makeup', active: false },
    { id: 'health', name: 'Health', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: 'Skincare Essential Kit',
      shop: 'Beauty Corner',
      price: '₹1,899',
      originalPrice: '₹2,499',
      image: 'assets/skincare-kit.webp',
      rating: 4.6,
      distance: '0.4 km',
      inStock: true,
      discount: '24% OFF'
    },
    {
      id: 2,
      name: 'Vitamin Supplement Pack',
      shop: 'Health Plus',
      price: '₹799',
      originalPrice: '₹999',
      image: 'assets/vitamin-pack.jpeg',
      rating: 4.4,
      distance: '0.6 km',
      inStock: true,
      discount: '20% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Beauty Corner',
      type: 'Beauty Store',
      distance: '0.4 km',
      image: 'assets/skincare-kit.webp',
      tags: ['Skincare', 'Cosmetics'],
      rating: 4.5,
      isOpen: true,
      offers: ['Beauty Consultation', 'Try Before Buy']
    },
    {
      id: 2,
      name: 'Health Plus',
      type: 'Health & Wellness',
      distance: '0.6 km',
      image: 'assets/health-plus.avif',
      tags: ['Supplements', 'Organic'],
      rating: 4.3,
      isOpen: true,
      offers: ['Health Check-ups', 'Expert Advice']
    },
    {
      id: 3,
      name: 'Natural Care',
      type: 'Organic Beauty',
      distance: '0.9 km',
      image: 'assets/natural-care.avif',
      tags: ['Natural', 'Herbal'],
      rating: 4.4,
      isOpen: false,
      offers: ['Chemical-free Products', 'Custom Blends']
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