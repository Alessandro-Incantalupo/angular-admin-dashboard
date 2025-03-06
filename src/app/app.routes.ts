import { Routes } from '@angular/router';
import { ErrorPageComponent } from './features/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./layouts/main-layout/main-layout.routes'),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
