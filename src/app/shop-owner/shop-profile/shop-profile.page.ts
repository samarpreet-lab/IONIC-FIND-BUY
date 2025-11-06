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
  public activeTab: string = 'basic';

  public shopProfile = {
    name: 'Desi Darbar - Amritsar',
    type: 'Authentic Punjabi Cuisine',
    since: '2010',
    avatar: 'assets/images/avatar.jpg',
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

  public setActiveTab(event: any): void {
    this.activeTab = event.detail.value;
  }

  public saveProfile(): void {
    console.log('Saving profile:', this.shopProfile);
  }

  public discardChanges(): void {
    console.log('Discarding changes');
  }

  public saveChanges(): void {
    console.log(this.shopProfile);
  }
}
