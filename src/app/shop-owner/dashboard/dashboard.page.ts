import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {
  public recentReviews = [
    {
      name: 'Priya K.',
      avatar: 'https://via.placeholder.com/40',
      rating: 5,
      text: 'Best Amritsari Kulcha in Amritsar! Authentic taste and freshly made.'
    },
    {
      name: 'Harpreet S.',
      avatar: 'https://via.placeholder.com/40',
      rating: 5,
      text: 'Amazing Sarson da Saag & Makki di Roti. Just like homemade! Highly recommended.'
    }
  ];

  public isHoursModalOpen = false;
  public openingTime = '11:00';
  public closingTime = '23:00';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public addProduct(): void {
    this.router.navigate(['/shop-owner/add-product']);
  }

  public editShop(): void {
    this.router.navigate(['/shop-owner/shop-profile']);
  }

  public updateHours(): void {
    this.isHoursModalOpen = true;
  }

  public closeHoursModal(): void {
    this.isHoursModalOpen = false;
  }

  public saveHours(): void {
    console.log('Saving shop hours:', this.openingTime, this.closingTime);
    // Here you would typically save to a service/backend
    this.isHoursModalOpen = false;
  }

  public postDailySpecial(): void {
    console.log('Opening post daily special modal');
  }

  public editLocation(): void {
    this.router.navigate(['/shop-owner/shop-profile']);
  }

  public manageInventory(): void {
    console.log('User wants to manage inventory');
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
