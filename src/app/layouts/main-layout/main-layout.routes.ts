import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { MenuService } from './services/menu.service';

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
        path: 'features/ui',
        loadChildren: () => import('../../features/ui/ui.routes'),
      },
    ],
  },
] satisfies Routes;
