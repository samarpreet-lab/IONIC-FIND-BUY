import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class Tab3Page {
  
  constructor(private router: Router) {}

  // Search functionality properties
  searchTerm: string = '';
  isSearching: boolean = false;
  
  // Popular Categories (Most searched in India)
  popularCategories = [
    { id: 'mobile', name: 'Mobile & Phones', icon: 'phone-portrait-outline', itemCount: '2.5k+' },
    { id: 'fashion', name: 'Fashion', icon: 'shirt-outline', itemCount: '1.8k+' },
    { id: 'electronics', name: 'Electronics', icon: 'laptop-outline', itemCount: '1.2k+' },
    { id: 'groceries', name: 'Groceries', icon: 'basket-outline', itemCount: '3.1k+' },
    { id: 'home-kitchen', name: 'Home & Kitchen', icon: 'home-outline', itemCount: '950+' },
    { id: 'beauty', name: 'Beauty & Health', icon: 'heart-outline', itemCount: '720+' }
  ];

  // Electronics & Gadgets Categories
  electronicsCategories = [
    { id: 'smartphones', name: 'Smartphones', icon: 'phone-portrait-outline', count: '1.2k' },
    { id: 'laptops', name: 'Laptops', icon: 'laptop-outline', count: '450' },
    { id: 'tablets', name: 'Tablets', icon: 'tablet-portrait-outline', count: '280' },
    { id: 'headphones', name: 'Headphones', icon: 'headset-outline', count: '320' },
    { id: 'cameras', name: 'Cameras', icon: 'camera-outline', count: '180' },
    { id: 'smartwatches', name: 'Smart Watches', icon: 'watch-outline', count: '220' },
    { id: 'gaming', name: 'Gaming', icon: 'game-controller-outline', count: '150' },
    { id: 'tv-audio', name: 'TV & Audio', icon: 'tv-outline', count: '380' },
  { id: 'accessories', name: 'Accessories', icon: 'pricetag-outline', count: '850' },
    { id: 'power-banks', name: 'Power Banks', icon: 'battery-charging-outline', count: '190' }
  ];

  // Fashion & Lifestyle Categories
  fashionCategories = [
    { id: 'mens-clothing', name: "Men's Clothing", icon: 'shirt-outline', count: '680' },
    { id: 'womens-clothing', name: "Women's Clothing", icon: 'woman-outline', count: '920' },
    { id: 'kids-clothing', name: 'Kids Clothing', icon: 'happy-outline', count: '340' },
    { id: 'footwear', name: 'Footwear', icon: 'footsteps-outline', count: '520' },
    { id: 'bags', name: 'Bags & Luggage', icon: 'bag-outline', count: '280' },
    { id: 'watches', name: 'Watches', icon: 'time-outline', count: '160' },
    { id: 'jewellery', name: 'Jewellery', icon: 'diamond-outline', count: '220' },
    { id: 'sunglasses', name: 'Sunglasses', icon: 'sunny-outline', count: '140' },
    { id: 'ethnic-wear', name: 'Ethnic Wear', icon: 'flower-outline', count: '380' },
    { id: 'lingerie', name: 'Innerwear', icon: 'heart-outline', count: '190' }
  ];

  // Food & Beverages Categories
  foodCategories = [
    { id: 'fruits-vegetables', name: 'Fruits & Vegetables', icon: 'leaf-outline', count: '540' },
    { id: 'dairy', name: 'Dairy Products', icon: 'water-outline', count: '320' },
    { id: 'snacks', name: 'Snacks & Sweets', icon: 'ice-cream-outline', count: '480' },
    { id: 'beverages', name: 'Beverages', icon: 'wine-outline', count: '280' },
    { id: 'spices', name: 'Spices & Masala', icon: 'flame-outline', count: '220' },
    { id: 'rice-grains', name: 'Rice & Grains', icon: 'nutrition-outline', count: '180' },
    { id: 'bakery', name: 'Bakery Items', icon: 'cafe-outline', count: '160' },
    { id: 'ready-to-eat', name: 'Ready to Eat', icon: 'fast-food-outline', count: '240' },
    { id: 'tea-coffee', name: 'Tea & Coffee', icon: 'cafe-outline', count: '190' },
    { id: 'organic', name: 'Organic Food', icon: 'checkmark-circle-outline', count: '120' }
  ];

  // Home & Living Categories
  homeCategories = [
    { id: 'furniture', name: 'Furniture', icon: 'bed-outline', count: '380' },
    { id: 'home-decor', name: 'Home Decor', icon: 'flower-outline', count: '520' },
    { id: 'kitchen', name: 'Kitchen & Dining', icon: 'restaurant-outline', count: '460' },
    { id: 'bedding', name: 'Bedding & Bath', icon: 'bed-outline', count: '290' },
    { id: 'lighting', name: 'Lighting', icon: 'bulb-outline', count: '180' },
    { id: 'storage', name: 'Storage & Organizers', icon: 'archive-outline', count: '220' },
    { id: 'appliances', name: 'Home Appliances', icon: 'hardware-chip-outline', count: '340' },
    { id: 'garden', name: 'Garden & Outdoor', icon: 'leaf-outline', count: '150' },
    { id: 'tools', name: 'Tools & Hardware', icon: 'hammer-outline', count: '280' },
    { id: 'cleaning', name: 'Cleaning Supplies', icon: 'sparkles-outline', count: '160' }
  ];

  // Health & Beauty Categories
  healthCategories = [
    { id: 'skincare', name: 'Skincare', icon: 'heart-outline', count: '420' },
    { id: 'makeup', name: 'Makeup & Cosmetics', icon: 'color-palette-outline', count: '350' },
    { id: 'haircare', name: 'Hair Care', icon: 'cut-outline', count: '280' },
    { id: 'fragrances', name: 'Fragrances', icon: 'flower-outline', count: '180' },
    { id: 'medicines', name: 'Medicines & Health', icon: 'medical-outline', count: '320' },
    { id: 'ayurveda', name: 'Ayurveda & Herbal', icon: 'leaf-outline', count: '190' },
    { id: 'fitness-nutrition', name: 'Fitness & Nutrition', icon: 'fitness-outline', count: '220' },
    { id: 'personal-care', name: 'Personal Care', icon: 'person-outline', count: '380' },
    { id: 'oral-care', name: 'Oral Care', icon: 'happy-outline', count: '150' },
    { id: 'baby-care', name: 'Baby Care', icon: 'heart-outline', count: '240' }
  ];

  // Sports & Fitness Categories
  sportsCategories = [
    { id: 'gym-fitness', name: 'Gym & Fitness', icon: 'fitness-outline', count: '280' },
    { id: 'cricket', name: 'Cricket', icon: 'baseball-outline', count: '320' },
    { id: 'football', name: 'Football', icon: 'football-outline', count: '180' },
    { id: 'badminton', name: 'Badminton', icon: 'tennis-outline', count: '220' },
    { id: 'cycling', name: 'Cycling', icon: 'bicycle-outline', count: '160' },
    { id: 'running', name: 'Running & Jogging', icon: 'walk-outline', count: '190' },
    { id: 'yoga', name: 'Yoga & Meditation', icon: 'leaf-outline', count: '150' },
    { id: 'swimming', name: 'Swimming', icon: 'water-outline', count: '120' },
    { id: 'outdoor-sports', name: 'Outdoor Sports', icon: 'trail-sign-outline', count: '140' },
    { id: 'sports-wear', name: 'Sports Wear', icon: 'shirt-outline', count: '250' }
  ];

  // Books & Education Categories
  booksCategories = [
    { id: 'academic-books', name: 'Academic Books', icon: 'school-outline', count: '450' },
    { id: 'competitive-exams', name: 'Competitive Exams', icon: 'trophy-outline', count: '380' },
    { id: 'novels', name: 'Novels & Fiction', icon: 'book-outline', count: '320' },
    { id: 'childrens-books', name: "Children's Books", icon: 'happy-outline', count: '280' },
    { id: 'stationery', name: 'Stationery', icon: 'pencil-outline', count: '520' },
    { id: 'religious-books', name: 'Religious Books', icon: 'library-outline', count: '190' },
    { id: 'biographies', name: 'Biographies', icon: 'person-outline', count: '140' },
    { id: 'self-help', name: 'Self Help', icon: 'bulb-outline', count: '160' },
    { id: 'comics', name: 'Comics & Manga', icon: 'heart-outline', count: '180' },
    { id: 'educational-toys', name: 'Educational Toys', icon: 'cube-outline', count: '220' }
  ];

  // Automotive Categories
  automotiveCategories = [
    { id: 'car-accessories', name: 'Car Accessories', icon: 'car-outline', count: '380' },
    { id: 'bike-accessories', name: 'Bike Accessories', icon: 'bicycle-outline', count: '320' },
    { id: 'car-care', name: 'Car Care Products', icon: 'water-outline', count: '180' },
    { id: 'helmets', name: 'Helmets & Safety', icon: 'shield-outline', count: '220' },
    { id: 'tyres', name: 'Tyres & Wheels', icon: 'ellipse-outline', count: '160' },
    { id: 'oils-lubricants', name: 'Oils & Lubricants', icon: 'flask-outline', count: '140' },
    { id: 'spare-parts', name: 'Spare Parts', icon: 'construct-outline', count: '280' },
    { id: 'electronics-auto', name: 'Auto Electronics', icon: 'radio-outline', count: '190' },
    { id: 'tools-auto', name: 'Automotive Tools', icon: 'hammer-outline', count: '150' },
    { id: 'cleaning-auto', name: 'Car Cleaning', icon: 'sparkles-outline', count: '120' }
  ];

  // Baby & Kids Categories
  babyCategories = [
    { id: 'baby-clothing', name: 'Baby Clothing', icon: 'shirt-outline', count: '320' },
    { id: 'toys', name: 'Toys & Games', icon: 'game-controller-outline', count: '480' },
    { id: 'baby-food', name: 'Baby Food', icon: 'nutrition-outline', count: '220' },
    { id: 'diapers', name: 'Diapers & Wipes', icon: 'heart-outline', count: '180' },
    { id: 'strollers', name: 'Strollers & Car Seats', icon: 'car-outline', count: '120' },
    { id: 'feeding', name: 'Feeding & Nursing', icon: 'water-outline', count: '160' },
    { id: 'baby-gear', name: 'Baby Gear', icon: 'bag-outline', count: '190' },
    { id: 'kids-furniture', name: 'Kids Furniture', icon: 'bed-outline', count: '140' },
    { id: 'school-supplies', name: 'School Supplies', icon: 'school-outline', count: '280' },
    { id: 'kids-shoes', name: 'Kids Footwear', icon: 'footsteps-outline', count: '220' }
  ];

  // Groceries & Daily Needs Categories
  groceryCategories = [
    { id: 'household-supplies', name: 'Household Supplies', icon: 'home-outline', count: '420' },
    { id: 'personal-hygiene', name: 'Personal Hygiene', icon: 'water-outline', count: '320' },
    { id: 'detergents', name: 'Detergents & Cleaners', icon: 'sparkles-outline', count: '280' },
    { id: 'paper-products', name: 'Paper Products', icon: 'document-outline', count: '180' },
    { id: 'batteries', name: 'Batteries & Power', icon: 'battery-charging-outline', count: '150' },
    { id: 'pet-supplies', name: 'Pet Supplies', icon: 'heart-outline', count: '190' },
    { id: 'office-supplies', name: 'Office Supplies', icon: 'briefcase-outline', count: '240' },
    { id: 'party-supplies', name: 'Party Supplies', icon: 'balloon-outline', count: '120' },
    { id: 'gift-items', name: 'Gift Items', icon: 'gift-outline', count: '220' },
    { id: 'seasonal-items', name: 'Seasonal Items', icon: 'flower-outline', count: '160' }
  ];

  // Handles search input and filters categories
  onSearchCategories(event: any) {
    const term = (event.detail?.value ?? event.target?.value ?? '').trim().toLowerCase();
    this.searchTerm = term;
    console.log('Searching for:', this.searchTerm);
    
    if (this.searchTerm && this.searchTerm.length > 0) {
      this.isSearching = true;
      console.log(`Filtering categories for: "${this.searchTerm}"`);
    } else {
      this.isSearching = false;
      this.searchTerm = '';
      console.log('Search cleared - showing all categories');
    }
  }

  private matchesSearch(category: { name: string; id: string; itemCount?: string; count?: string }): boolean {
    if (!this.searchTerm) {
      return true;
    }

    const lowerName = category.name.toLowerCase();
    const lowerId = category.id.toLowerCase();

    return lowerName.includes(this.searchTerm) || lowerId.includes(this.searchTerm);
  }

  private filterCategories<T extends { name: string; id: string }>(categories: T[]): T[] {
    if (!this.isSearching || !this.searchTerm) {
      return categories;
    }

    return categories.filter(category => this.matchesSearch(category));
  }

  // Get filtered popular categories based on search
  getFilteredPopularCategories() {
    return this.filterCategories(this.popularCategories);
  }

  // Get filtered electronics categories
  getFilteredElectronicsCategories() {
    return this.filterCategories(this.electronicsCategories);
  }

  // Get filtered fashion categories
  getFilteredFashionCategories() {
    return this.filterCategories(this.fashionCategories);
  }

  // Get filtered food categories
  getFilteredFoodCategories() {
    return this.filterCategories(this.foodCategories);
  }

  // Get filtered home categories
  getFilteredHomeCategories() {
    return this.filterCategories(this.homeCategories);
  }

  // Get filtered health categories
  getFilteredHealthCategories() {
    return this.filterCategories(this.healthCategories);
  }

  // Get filtered sports categories
  getFilteredSportsCategories() {
    return this.filterCategories(this.sportsCategories);
  }

  // Get filtered books categories
  getFilteredBooksCategories() {
    return this.filterCategories(this.booksCategories);
  }

  // Get filtered automotive categories
  getFilteredAutomotiveCategories() {
    return this.filterCategories(this.automotiveCategories);
  }

  // Get filtered baby categories
  getFilteredBabyCategories() {
    return this.filterCategories(this.babyCategories);
  }

  // Get filtered grocery categories
  getFilteredGroceryCategories() {
    return this.filterCategories(this.groceryCategories);
  }

  // Check if any categories match the search
  hasSearchResults(): boolean {
    if (!this.isSearching) return true;
    
    const allFilteredCategories = [
      ...this.getFilteredPopularCategories(),
      ...this.getFilteredElectronicsCategories(),
      ...this.getFilteredFashionCategories(),
      ...this.getFilteredFoodCategories(),
      ...this.getFilteredHomeCategories(),
      ...this.getFilteredHealthCategories(),
      ...this.getFilteredSportsCategories(),
      ...this.getFilteredBooksCategories(),
      ...this.getFilteredAutomotiveCategories(),
      ...this.getFilteredBabyCategories(),
      ...this.getFilteredGroceryCategories()
    ];
    
    return allFilteredCategories.length > 0;
  }

  // Navigate to category
  navigateToCategory(categoryId: string) {
    console.log('Navigating to category:', categoryId);
    
    // Map category IDs to routes
    const categoryRoutes: { [key: string]: string } = {
      'mobile': '/mobile-phones',
      'fashion': '/fashion',
      'electronics': '/electronics',
      'groceries': '/groceries',
      'home-kitchen': '/home-kitchen',
      'beauty': '/beauty-health'
    };
    
    const route = categoryRoutes[categoryId];
    if (route) {
      this.router.navigate([route]);
    } else {
      // Fallback for categories that don't have dedicated pages yet
      alert(`Opening category: ${categoryId} 🛍️`);
    }
  }

  

  // Clear search and show all categories
  clearSearch() {
    this.searchTerm = '';
    this.isSearching = false;
    console.log('Search cleared');
  }
}
