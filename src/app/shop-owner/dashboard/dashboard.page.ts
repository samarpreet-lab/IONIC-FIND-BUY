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
    console.log('Opening update hours modal');
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
