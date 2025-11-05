import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: 'shop-profile',
        loadComponent: () =>
          import('../shop-profile/shop-profile.page').then((m) => m.ShopProfilePage),
      },
      {
        path: 'add-product',
        loadComponent: () =>
          import('../add-product/add-product.page').then((m) => m.AddProductPage),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
