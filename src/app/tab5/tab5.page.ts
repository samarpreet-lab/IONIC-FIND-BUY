import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService, UserRole } from '../services/role.service';

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
  public userRole$: Observable<UserRole>;

  readonly profileSummary = {
    name: 'Gurpreet Singh',
    joinDate: 'Joined August 2024',
    favorites: 18,
    role: 'Customer'
  };

  readonly customerActions: ProfileAction[] = [
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

  readonly shopOwnerActions: ProfileAction[] = [
    {
      label: 'Account Settings',
      description: 'Manage your account preferences',
      icon: 'settings-outline',
      emphasis: 'primary'
    },
    {
      label: 'My Shop Profile',
      description: 'View and edit your shop information',
      icon: 'storefront-outline',
      routerLink: '/shop-owner/shop-profile'
    },
    {
      label: 'Payment Methods',
      description: 'Manage your payment information',
      icon: 'card-outline'
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

  constructor(private roleService: RoleService, private router: Router) {
    this.userRole$ = this.roleService.role$;
  }

  public logout(): void {
    this.roleService.setRole('customer');
    this.router.navigate(['/login']);
  }
}

