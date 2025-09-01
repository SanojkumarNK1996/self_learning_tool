import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@beACoder/@pages').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('@beACoder/@pages').then((m) => m.SignupComponent),
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('@beACoder/@pages').then((m) => m.ForgotComponent),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('@beACoder/@layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: '/user/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@beACoder/@pages').then((m) => m.SignupComponent),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('@beACoder/@layout').then((m) => m.AdminLayoutComponent),
  },
];
