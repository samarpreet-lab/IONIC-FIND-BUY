import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

type NotificationToggleKey =
  | 'pushNotifications'
  | 'emailUpdates'
  | 'newShops'
  | 'trendingProducts'
  | 'exclusivePromos';

type NotificationToggle = {
  key: NotificationToggleKey;
  label: string;
  description: string;
};

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NotificationSettingsPage {
  readonly introCard = {
    title: 'Stay in the loop',
    message: 'Pick the alerts you want about Punjabi shops, mandis, and seasonal treats near you.'
  };

  readonly generalToggles: NotificationToggle[] = [
    {
      key: 'pushNotifications',
      label: 'Push notifications',
      description: 'Enable alerts on this device'
    },
    {
      key: 'emailUpdates',
      label: 'Email updates',
      description: 'Weekly highlights and tips'
    }
  ];

  readonly nearbyToggles: NotificationToggle[] = [
    {
      key: 'newShops',
      label: 'New shops around you',
      description: 'Alerts when a fresh Punjabi store opens'
    },
    {
      key: 'trendingProducts',
      label: 'Trending products nearby',
      description: 'Hot items within your discovery radius'
    },
    {
      key: 'exclusivePromos',
      label: 'Exclusive in-store promos',
      description: 'Limited-time offers in your area'
    }
  ];

  readonly defaultState: Record<NotificationToggleKey, boolean> = {
    pushNotifications: true,
    emailUpdates: false,
    newShops: true,
    trendingProducts: true,
    exclusivePromos: false
  };

  notificationState: Record<NotificationToggleKey, boolean> = { ...this.defaultState };
  readonly radiusDisplay = {
    value: 3,
    label: '3 km around your location'
  } as const;

 
}
