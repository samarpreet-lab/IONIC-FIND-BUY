import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

type ProfileAction = {
  label: string;
  description: string;
  icon: string;
  emphasis?: 'primary' | 'danger' | 'neutral';
  routerLink?: string | any[];
};

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class Tab5Page {

  readonly profileSummary = {
    name: 'Gurpreet Singh',
    joinDate: 'Joined August 2024',
    favorites: 18,
    role: 'Customer'
  };

  readonly accountActions: ProfileAction[] = [
    {
      label: 'Edit Profile',
      description: 'Update your name, photo, and bio',
      icon: 'pencil-outline',
      emphasis: 'primary',
      routerLink: '/tabs/edit-profile'
    },
    {
      label: 'Notifications',
      description: 'Control alerts for new shops and offers',
      icon: 'notifications-outline',
      routerLink: '/tabs/notification-settings'
    },
    {
      label: 'Location Settings',
      description: 'Manage discovery radius and permissions',
      icon: 'navigate-outline',
      routerLink: '/tabs/location-settings'
    }
  ];

  readonly supportActions: ProfileAction[] = [
    {
      label: 'Contact Support',
      description: 'Email or message our support team',
      icon: 'chatbubbles-outline',
      routerLink: '/tabs/contact-support'
    }
  ];

  get profileInitials(): string {
    const parts = this.profileSummary.name.trim().split(/\s+/);
    const first = parts[0]?.charAt(0) ?? '';
    const second = parts[1]?.charAt(0) ?? '';
    return `${first}${second}`.toUpperCase();
  }
}
