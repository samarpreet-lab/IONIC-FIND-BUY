import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page {
  segmentValue: 'products' | 'shops' = 'products';
  searchTerm = '';

  favoriteProducts = [
    {
      id: 'amritsari-kulcha',
      name: 'Amritsari Kulcha Combo',
      shop: 'Kesar Da Dhaba',
      location: 'Town Hall, Amritsar',
      distance: '2.1 km',
      image: '/assets/amritk.jpg',
      saved: true,
      tags: ['Punjabi cuisine', 'Kulcha', 'Amritsar', 'Street favourite']
    },
    {
      id: 'patiala-lassi',
      name: 'Patiala Lassi Bottle',
      shop: 'Gian Chand Dairy',
      location: 'Adalat Bazaar, Patiala',
      distance: '1.4 km',
      image: '/assets/patialalassi.jpeg',
      saved: true,
      tags: ['Lassi', 'Fresh dairy', 'Patiala', 'Beverage']
    },
    {
      id: 'phulkari-dupattas',
      name: 'Handcrafted Phulkari Dupatta',
      shop: 'Phulkari Heritage Studio',
      location: 'Model Town, Ludhiana',
      distance: '3.2 km',
      image: '/assets/PhulkariDupatta.webp',
      saved: true,
      tags: ['Phulkari', 'Textiles', 'Ludhiana', 'Handloom']
    }
  ];

  favoriteShops = [
    {
      id: 'kesar-da-dhaba',
      name: 'Kesar Da Dhaba',
      category: 'Traditional Punjabi Cuisine',
      location: 'Town Hall, Amritsar',
      distance: '2.1 km',
      rating: 4.8,
      reviews: 215,
      image: '/assets/kesardhaba.avif',
      saved: true,
      tags: ['Dhaba', 'Punjabi food', 'Amritsar']
    },
    {
      id: 'phulkari-heritage',
      name: 'Phulkari Heritage Studio',
      category: 'Handloom & Craft Collective',
      location: 'Model Town, Ludhiana',
      distance: '3.2 km',
      rating: 4.7,
      reviews: 168,
      image: '/assets/phustu.jpeg',
      saved: true,
      tags: ['Phulkari', 'Crafts', 'Ludhiana']
    },
    {
      id: 'gian-chand-dairy',
      name: 'Gian Chand Dairy',
      category: 'Fresh Dairy & Sweets',
      location: 'Adalat Bazaar, Patiala',
      distance: '1.4 km',
      rating: 4.9,
      reviews: 342,
      image: '/assets/gaindairy.jpg',
      saved: true,
      tags: ['Lassi', 'Mithai', 'Patiala']
    }
  ];

  onSegmentChange(event: any) {
    this.segmentValue = event.detail?.value ?? 'products';
  }

  onSearchFavorites(event: any) {
    const value = (event.detail?.value ?? '').toLowerCase().trim();
    this.searchTerm = value;
  }

  toggleSave(item: { saved: boolean }) {
    item.saved = !item.saved;
  }

  getFilteredProducts() {
    if (!this.searchTerm) {
      return this.favoriteProducts;
    }

    return this.favoriteProducts.filter(item =>
      this.matchesSearchTerm([
        item.name,
        item.shop,
        item.location,
        item.distance
      ], item.tags)
    );
  }

  getFilteredShops() {
    if (!this.searchTerm) {
      return this.favoriteShops;
    }

    return this.favoriteShops.filter(item =>
      this.matchesSearchTerm([
        item.name,
        item.category,
        item.location,
        item.distance,
        item.rating.toString(),
        item.reviews.toString()
      ], item.tags)
    );
  }

  get hasProductResults() {
    return this.getFilteredProducts().length > 0;
  }

  get hasShopResults() {
    return this.getFilteredShops().length > 0;
  }

  private matchesSearchTerm(fields: Array<string | undefined>, tags: string[]) {
    const term = this.searchTerm;
    return (
      fields.some(field => field?.toLowerCase().includes(term)) ||
      tags.some(tag => tag.toLowerCase().includes(term))
    );
  }
}
