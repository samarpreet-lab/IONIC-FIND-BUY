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
  public shopProfile = {
    name: 'My Local Shop',
    address: '123 Main St, City',
    phone: '9876543210',
    hours: '9:00 AM - 6:00 PM',
    description: 'We sell the best local products!'
  };

  constructor() { }

  ngOnInit() {
  }

  public saveChanges(): void {
    console.log(this.shopProfile);
  }

}
