import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'signup',
        loadComponent: () => import('../signup/signup.page').then(m => m.SignupPage)
      },
      {
        path: 'login',
        loadComponent: () => import('../login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'tab4',
        loadComponent: () => import('../tab4/tab4.page').then(m => m.Tab4Page)
      },
      {
        path: 'tab5',
        loadComponent: () => import('../tab5/tab5.page').then(m => m.Tab5Page)
      },
      {
        path: 'location-settings',
        loadComponent: () =>
          import('../location-settings/location-settings.page').then((m) => m.LocationSettingsPage)
      },
      {
        path: 'contact-support',
        loadComponent: () =>
          import('../contact-support/contact-support.page').then((m) => m.ContactSupportPage)
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('../edit-profile/edit-profile.page').then((m) => m.EditProfilePage)
      },
      {
        path: 'notification-settings',
        loadComponent: () =>
          import('../notification-settings/notification-settings.page').then((m) => m.NotificationSettingsPage)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];
