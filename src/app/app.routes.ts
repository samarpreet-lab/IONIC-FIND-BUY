import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then( m => m.Tab5Page)
  },
  {
    path: 'location-settings',
    loadComponent: () => import('./location-settings/location-settings.page').then(m => m.LocationSettingsPage)
  },
  {
    path: 'contact-support',
    loadComponent: () => import('./contact-support/contact-support.page').then(m => m.ContactSupportPage)
  },
  {
    path: 'edit-profile',
    loadComponent: () => import('./edit-profile/edit-profile.page').then(m => m.EditProfilePage)
  },
  {
    path: 'notification-settings',
    loadComponent: () => import('./notification-settings/notification-settings.page').then(m => m.NotificationSettingsPage)
  },
  {
    path: 'mobile-phones',
    loadComponent: () => import('./mobile-phones/mobile-phones.page').then(m => m.MobilePhonesPage)
  },
  {
    path: 'fashion',
    loadComponent: () => import('./fashion/fashion.page').then(m => m.FashionPage)
  },
  {
    path: 'electronics',
    loadComponent: () => import('./electronics/electronics.page').then(m => m.ElectronicsPage)
  },
  {
    path: 'groceries',
    loadComponent: () => import('./groceries/groceries.page').then(m => m.GroceriesPage)
  },
  {
    path: 'home-kitchen',
    loadComponent: () => import('./home-kitchen/home-kitchen.page').then(m => m.HomeKitchenPage)
  },
  {
    path: 'beauty-health',
    loadComponent: () => import('./beauty-health/beauty-health.page').then(m => m.BeautyHealthPage)
  },
  {
    path: 'shop-owner',
    loadChildren: () => import('./shop-owner/tabs/tabs.routes').then((m) => m.routes)
  },
];
