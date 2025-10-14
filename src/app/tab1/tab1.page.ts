import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class Tab1Page {
  
  // Feature Cards Array
  featureCards = [
    {
      id: 1,
      title: 'Support your local sabzi mandi',
      details: 'Today 8am-2pm • 1.2 km',
      image: 'assets/sabzimandi.webp',
      alt: 'Local Market',
      type: 'market',
      isOpen: true,
      featured: true
    },
    {
      id: 2,
      title: 'Fresh roti & bread nearby',
      details: 'Hot rotis ready at 10am',
      image: 'assets/rotibread.webp',
      alt: 'Fresh Bakes',
      type: 'bakery',
      isOpen: true,
      featured: true
    },
  ];

  // Nearby Shops Array
  nearbyShops = [
    {
      id: 1,
      name: 'Sharma General Store',
      type: 'Kirana Store',
      distance: '1.1 km',
      image: 'assets/sharma-general-store.avif',
      tags: ['Daily Needs', 'Fresh Items'],
      rating: 4.5,
      category: 'grocery',
      isOpen: true
    },
    {
      id: 2,
      name: 'Ravi Sweets & Bakery',
      type: 'Sweets & Bakery',
      distance: '0.8 km',
      image: 'assets/ravi-sweets-and-bakery.avif',
      tags: ['Fresh Sweets', 'Namkeen'],
      rating: 4.8,
      category: 'sweets',
      isOpen: true
    },
    {
      id: 3,
      name: 'Gupta Meat Corner',
      type: 'Non-Veg Shop',
      distance: '1.6 km',
      image: 'assets/guptameat.avif',
      tags: ['Fresh Cut', 'Halal'],
      rating: 4.2,
      category: 'meat',
      isOpen: false
    },
    {
      id: 4,
      name: 'Punjab Dairy Farm',
      type: 'Dairy Products',
      distance: '2.1 km',
      image: 'assets/punjab-dairy-farm.webp',
      tags: ['Pure Milk', 'Organic'],
      rating: 4.6,
      category: 'dairy',
      isOpen: true
    },
    {
      id: 5,
      name: 'Kumar Electronics',
      type: 'Electronics Store',
      distance: '1.3 km',
      image: 'assets/kumar-electronics.avif',
      tags: ['Mobile', 'Accessories'],
      rating: 4.0,
      category: 'electronics',
      isOpen: false
    },
    {
      id: 6,
      name: 'Patel Pharmacy',
      type: 'Medical Store',
      distance: '0.9 km',
      image: 'assets/patel-pharmacy.avif',
      tags: ['24/7', 'Medicine'],
      rating: 4.3,
      category: 'pharmacy',
      isOpen: false
    }
  ];

  constructor(private router: Router) {}



  // Method to get shop status text based on isOpen
  getShopStatus(isOpen: boolean): string {
    return isOpen ? 'Open' : 'Closed';
  }

  // Method to get shop status color
  getStatusColor(isOpen: boolean): string {
    return isOpen ? 'success' : 'danger';
  }

}
