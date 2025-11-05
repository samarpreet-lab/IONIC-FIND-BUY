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
    name: 'Sunrise Bakery',
    type: 'Local bakery',
    since: '2012',
    avatar: 'assets/images/avatar.jpg',
    description: 'Fresh bread, pastries, and coffee made daily.',
    phone: '(615) 555-0147',
    email: 'hello@sunrisebakery.com',
    hours: 'Mon-Sun, 7:00 AM - 6:00 PM',
    street: '123 Market St',
    city: 'Springfield',
    state: 'CA',
    postalCode: '96107',
    latitude: '37.7765',
    longitude: '-122.4367',
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
