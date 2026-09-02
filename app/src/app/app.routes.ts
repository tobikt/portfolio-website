import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio-page/portfolio-page').then((module) => module.PortfolioPage),
    title: 'Portfolio',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
