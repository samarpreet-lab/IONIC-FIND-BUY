import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: 'mobile-phones.page.html',
  styleUrls: ['mobile-phones.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class MobilePhonesPage {

  // Category info
  categoryInfo = {
    name: 'Mobile & Phones',
    icon: 'phone-portrait-outline',
    itemCount: '2.5k+ items',
    description: 'Find the latest smartphones, accessories, and mobile services'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'smartphones', name: 'Smartphones', active: false },
    { id: 'accessories', name: 'Accessories', active: false },
    { id: 'repairs', name: 'Repair Services', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      shop: 'Mobile World',
      price: '₹1,39,999',
      originalPrice: '₹1,49,999',
      image: 'assets/15pro.webp',
      rating: 4.8,
      distance: '0.5 km',
      inStock: true,
      discount: '7% OFF'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      shop: 'Tech Hub',
      price: '₹89,999',
      originalPrice: '₹94,999',
      image: 'assets/s24.webp',
      rating: 4.7,
      distance: '0.8 km',
      inStock: true,
      discount: '5% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Mobile World',
      type: 'Mobile Store',
      distance: '0.5 km',
      image: 'assets/mobileworld.avif',
      tags: ['Latest Models', 'Accessories'],
      rating: 4.6,
      isOpen: true,
      offers: ['Buy 1 Get 1 Cover Free', 'EMI Available']
    },
    {
      id: 2,
      name: 'Tech Hub Electronics',
      type: 'Electronics & Mobile',
      distance: '0.8 km',
      image: 'assets/texhhub.jpg',
      tags: ['Repair Services', 'Exchange'],
      rating: 4.4,
      isOpen: true,
      offers: ['Exchange Bonus', '0% EMI']
    },
    {
      id: 3,
      name: 'Quick Mobile Repair',
      type: 'Repair Service',
      distance: '1.2 km',
      image: 'assets/mobile-repair.avif',
      tags: ['Quick Service', 'Warranty'],
      rating: 4.2,
      isOpen: false,
      offers: ['Same Day Repair', 'Free Pickup']
    },
    {
      id: 4,
      name: 'Gadget Galaxy',
      type: 'Mobile Accessories',
      distance: '1.5 km',
      image: 'assets/gadget-galaxy.webp',
      tags: ['Covers & Cases', 'Chargers'],
      rating: 4.3,
      isOpen: true,
      offers: ['Combo Deals', 'Bulk Discount']
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