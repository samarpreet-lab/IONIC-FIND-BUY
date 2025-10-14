import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

type ContactMethodKey = 'email' | 'inApp';

type ContactMethod = {
  key: ContactMethodKey;
  label: string;
  description: string;
};

type TopicOption = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.page.html',
  styleUrls: ['./contact-support.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactSupportPage {
  readonly supportSummary = {
    title: "We're here to help",
    message: "Tell us what's going on. We'll reply by email."
  };

  readonly userDetails = {
    email: 'gurpreet.singh@punjabmail.com',
    name: 'Gurpreet Singh'
  };

  readonly topicOptions: TopicOption[] = [
    { value: 'orders', label: 'Orders & tracking' },
    { value: 'payments', label: 'Payments & refunds' },
    { value: 'store-owner', label: 'Store owner support' },
    { value: 'technical', label: 'Technical issue' },
    { value: 'other', label: 'Something else' }
  ];

  readonly contactMethods: ContactMethod[] = [
    {
      key: 'email',
      label: 'Email reply',
      description: "We'll respond to your email"
    },
    {
      key: 'inApp',
      label: 'In-app messages',
      description: 'Get updates in your inbox'
    }
  ];

  selectedTopic = '';
  issueDescription = '';
  selectedMethod: ContactMethodKey = 'email';
  attachmentsNote = 'Include shop name, product, and steps to reproduce if applicable.';

  onMethodSelect(method: ContactMethodKey): void {
    this.selectedMethod = method;
  }

  onSubmit(): void {
    // Placeholder for future integration.
    // Keeping minimal interaction to acknowledge the button press.
    this.issueDescription = this.issueDescription.trim();
  }
}
