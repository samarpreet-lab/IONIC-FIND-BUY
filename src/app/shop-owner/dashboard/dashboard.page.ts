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
  public useShopTimezone = true;
  public showNotesCheckbox = false;
  public visitorNotes = '';

  public weeklyHours = [
    { name: 'Monday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Tuesday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Wednesday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Thursday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Friday', opening: '09:00', closing: '18:00', closed: false },
    { name: 'Saturday', opening: '10:00', closing: '16:00', closed: false },
    { name: 'Sunday', opening: '', closing: '', closed: true }
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
    this.isHoursModalOpen = true;
  }

  public closeHoursModal(): void {
    this.isHoursModalOpen = false;
  }

  public saveHours(): void {
    console.log('Saving shop hours:', this.weeklyHours);
    // Here you would typically save to a service/backend
    this.isHoursModalOpen = false;
  }

  public toggleDayStatus(day: any): void {
    day.closed = !day.closed;
    if (day.closed) {
      day.opening = '';
      day.closing = '';
    } else {
      day.opening = '09:00';
      day.closing = '18:00';
    }
  }

  public formatTime(time: string): string {
    if (!time) return '';
    // Time format is already HH:mm, just return as is
    return time;
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
