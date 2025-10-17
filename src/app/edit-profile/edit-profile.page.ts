import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EditProfilePage {
  profileSummary = {
    name: 'Gurpreet Singh',
    bio: 'Amritsar foodie supporting local artisans and vibrant bazaars.',
    username: '@gurpreet_s',
    joined: 'Joined August 2024 • 18 favorites'
  };

  avatarUrl = '/assets/sikh.jpg';

  contactFields = [
    {
      key: 'email',
      label: 'Email',
      value: 'gurpreet.singh@punjabmail.com',
      actionLabel: 'Edit'
    },
    {
      key: 'phone',
      label: 'Phone',
      value: '+91 98765 43210',
      actionLabel: 'Edit'
    }
  ];

  preferenceFields = [
    {
      key: 'radius',
      label: 'Discovery radius',
      subtitle: '10 km',
      actionLabel: 'Adjust'
    },
    {
      key: 'notifications',
      label: 'Notifications',
      subtitle: 'New shops, nearby updates',
      actionLabel: 'Manage'
    }
  ];

}
