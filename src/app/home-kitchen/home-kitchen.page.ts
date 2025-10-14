import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-kitchen',
  templateUrl: 'home-kitchen.page.html',
  styleUrls: ['home-kitchen.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class HomeKitchenPage {

  // Category info
  categoryInfo = {
    name: 'Home & Kitchen',
    icon: 'home-outline',
    itemCount: '2.5k+ items',
    description: 'Kitchen appliances, cookware, home decor, and furniture'
  };

  // Filter options
  filterOptions = [
    { id: 'all', name: 'All', active: true },
    { id: 'kitchen', name: 'Kitchen', active: false },
    { id: 'home-decor', name: 'Home Decor', active: false },
    { id: 'furniture', name: 'Furniture', active: false }
  ];

  // Featured products
  featuredProducts = [
    {
      id: 1,
      name: 'Non-Stick Cookware Set',
      shop: 'Kitchen World',
      price: '₹3,499',
      originalPrice: '₹4,999',
      image: 'assets/cookware-set.jpeg',
      rating: 4.5,
      distance: '0.5 km',
      inStock: true,
      discount: '30% OFF'
    },
    {
      id: 2,
      name: 'Designer Table Lamp',
      shop: 'Home Decor Plus',
      price: '₹1,299',
      originalPrice: '₹1,799',
      image: 'assets/table-lamp.jpg ',
      rating: 4.3,
      distance: '0.8 km',
      inStock: true,
      discount: '28% OFF'
    }
  ];

  // Nearby shops
  nearbyShops = [
    {
      id: 1,
      name: 'Kitchen World',
      type: 'Kitchen Store',
      distance: '0.5 km',
      image: 'assets/kitchen-world.avif',
      tags: ['Cookware', 'Appliances'],
      rating: 4.4,
      isOpen: true,
      offers: ['Bundle Deals', 'Installation Service']
    },
    {
      id: 2,
      name: 'Home Decor Plus',
      type: 'Home Decor',
      distance: '0.8 km',
      image: 'assets/home-decor.avif',
      tags: ['Lighting', 'Wall Art'],
      rating: 4.2,
      isOpen: true,
      offers: ['Design Consultation', 'Custom Orders']
    },
    {
      id: 3,
      name: 'Furniture Mall',
      type: 'Furniture Store',
      distance: '1.2 km',
      image: 'assets/furniture-mall.jpg',
      tags: ['Sofa', 'Dining Sets'],
      rating: 4.1,
      isOpen: false,
      offers: ['EMI Available', 'Free Assembly']
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