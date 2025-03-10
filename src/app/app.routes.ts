import { Routes } from '@angular/router';
import { ErrorPageComponent } from './features/error-page/error-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./layouts/main-layout/main-layout.routes'),
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./layouts/main-layout/main-layout.routes'),
  // },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
