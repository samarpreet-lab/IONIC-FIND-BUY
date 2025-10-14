import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

type ContactField = {
  key: 'email' | 'phone';
  label: string;
  value: string;
  actionLabel: string;
};

type PreferenceField = {
  key: 'radius' | 'notifications';
  label: string;
  subtitle: string;
  actionLabel: string;
};

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditProfilePage {
  readonly profileSummary = {
    name: 'Gurpreet Singh',
    bio: 'Amritsar foodie supporting local artisans and vibrant bazaars.',
    username: '@gurpreet_s',
    joined: 'Joined August 2024 • 18 favorites'
  };

  avatarUrl = '/assets/sikh.jpg';

  readonly contactFields: ContactField[] = [
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

  readonly preferenceFields: PreferenceField[] = [
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

  formState = {
    fullName: this.profileSummary.name,
    username: this.profileSummary.username,
    bio: this.profileSummary.bio
  };

  onAvatarChange(): void {
    // Placeholder for image picker integration.
  }

  onFieldAction(_field: ContactField | PreferenceField): void {
    // Placeholder for future edit dialogs.
  }

  onCancel(): void {
    // Reset form values to initial snapshot.
    this.formState = {
      fullName: this.profileSummary.name,
      username: this.profileSummary.username,
      bio: this.profileSummary.bio
    };
  }

  onSave(): void {
    // Future API integration point; currently no-op.
  }
}
