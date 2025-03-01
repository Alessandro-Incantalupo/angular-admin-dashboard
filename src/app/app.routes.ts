import { Routes } from '@angular/router';

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
    // { path: '**', redirectTo: 'errors/404' },

  ]
;
