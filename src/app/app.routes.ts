import { ErrorPageComponent } from './features/error-page/error-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PATHS } from './core/costants/routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./layouts/main-layout/main-layout.routes'),
  },
  {
    path: PATHS.AUTH,
    loadChildren: () => import('./features/auth/auth.routes'),
  },
  {
    path: PATHS.PROFILE,
    loadComponent: () => import('./features/profile/profile.component'),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
