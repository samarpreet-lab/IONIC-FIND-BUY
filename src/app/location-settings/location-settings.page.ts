import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

type ToggleConfig = {
  label: string;
  description: string;
  key: string;
};

@Component({
  selector: 'app-location-settings',
  templateUrl: './location-settings.page.html',
  styleUrls: ['./location-settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LocationSettingsPage {
  readonly permissionToggles: ToggleConfig[] = [
    {
      label: 'Location access',
      description: 'Allow while using the app',
      key: 'locationAccess'
    },
    {
      label: 'Precise location',
      description: 'Improve accuracy for distance',
      key: 'preciseLocation'
    },
    {
      label: 'Background updates',
      description: 'Refresh nearby shops periodically',
      key: 'backgroundUpdates'
    }
  ];

  readonly preferenceToggles: ToggleConfig[] = [
    {
      label: 'Show only open now',
      description: 'Hide shops that are closed',
      key: 'showOnlyOpen'
    },
    {
      label: 'Prioritize local producers',
      description: 'Highlight farms and small shops',
      key: 'prioritizeLocal'
    }
  ];

  readonly settingsState: Record<string, boolean> = {
    locationAccess: false,
    preciseLocation: false,
    backgroundUpdates: false,
    showOnlyOpen: false,
    prioritizeLocal: true
  };
}
