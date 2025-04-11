import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { MenuService } from './services/menu.service';
import { PATHS } from '../../core/constants/routes';

// Exporting the default array of routes for the MainLayoutComponent
// This array includes a route with an empty path that uses MainLayoutComponent
// and allows for potential child routes to be added under 'children'.
// Using `export default` ensures that `loadChildren` can dynamically import this module correctly.
export default [
  {
    path: '',
    // pathMatch: 'full',
    component: MainLayoutComponent,
    providers: [MenuService],
    children: [
      {
        path: PATHS.FEATURES_UI,
        loadChildren: () => import('../../features/ui/ui.routes'),
      },
      {
        path: PATHS.USERS,
        loadChildren: () => import('../../features/users/users.routes'),
      },
    ],
  },
] satisfies Routes;
