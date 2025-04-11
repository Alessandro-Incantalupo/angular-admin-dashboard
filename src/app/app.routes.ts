import { ErrorPageComponent } from './features/error-page/error-page.component';
import { PATHS } from './core/constants/routes';
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards';

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
    path: PATHS.PROFILE + '/:username',
    loadComponent: () => import('./features/profile/profile.component'),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
