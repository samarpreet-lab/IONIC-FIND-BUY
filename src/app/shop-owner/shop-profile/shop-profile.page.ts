import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.page.html',
  styleUrls: ['./shop-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShopProfilePage implements OnInit {
  activeTab: string = 'basic';

  weeklyHours = [
    { name: 'Monday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Tuesday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Wednesday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Thursday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Friday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Saturday', opening: '10:00', closing: '16:00', closed: false },
    { name: 'Sunday', opening: '', closing: '', closed: true }
  ];

  shopProfile = {
    name: 'Desi Restaurant - Amritsar',
    type: 'Authentic Punjabi Cuisine',
    since: '2010',
    avatar: 'assets/avatar.avif',
    description: 'Authentic Punjabi cuisine with traditional recipes and fresh ingredients. Specializing in Makki di Roti, Sarson da Saag, Amritsari Kulcha, Chole Bhature, and more.',
    phone: '+91-98762-34567',
    email: 'info@desidarbar-amritsar.com',
    hours: 'Mon-Sun, 11:00 AM - 11:00 PM',
    street: '456 Golden Temple Road',
    city: 'Amritsar',
    state: 'Punjab',
    postalCode: '143001',
    latitude: '31.6340',
    longitude: '74.8711',
    photos: [
      'assets/images/shop-1.jpg',
      'assets/images/shop-2.jpg',
      'assets/images/shop-3.jpg'
    ],
    visibility: 'Public'
  };

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(event: any): void {
    this.activeTab = event.detail.value;
  }

  saveProfile(): void {
    console.log('Saving profile:', this.shopProfile);
  }

  discardChanges(): void {
    console.log('Discarding changes');
  }

  saveChanges(): void {
    console.log(this.shopProfile);
  }

  formatTime(time: string): string {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }

  getFirstOpeningHour(): string {
    const firstOpen = this.weeklyHours.find(day => !day.closed);
    if (firstOpen) {
      return `${firstOpen.name}, ${this.formatTime(firstOpen.opening)} - ${this.formatTime(firstOpen.closing)}`;
    }
    return this.shopProfile.hours;
  }

  getTodayHours(): string {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todayData = this.weeklyHours.find(day => day.name === today);
    if (todayData) {
      if (todayData.closed) {
        return 'Closed';
      }
      return `${this.formatTime(todayData.opening)} - ${this.formatTime(todayData.closing)}`;
    }
    return this.shopProfile.hours;
  }
}
