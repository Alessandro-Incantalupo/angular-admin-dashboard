import { Routes } from '@angular/router';
import SignUpComponent from './sign-up/sign-up.component';
import { UnsavedChangesGuard } from '../../core/guards';

// Exporting the default array of routes for the MainLayoutComponent
// This array includes a route with an empty path that uses MainLayoutComponent
// and allows for potential child routes to be added under 'children'.
// Using `export default` ensures that `loadChildren` can dynamically import this module correctly.
export default [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./sign-in/sign-in.component'),
        // data: { returnUrl: window.location.pathname },
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up.component'),
        canDeactivate: [UnsavedChangesGuard], // Prevents form loss
      },
      {
        path: 'sign-in-template-driven',
        loadComponent: () => import('./sign-in-template-driven/sign-in-template-driven.component'),
      },
    ],
  },
] satisfies Routes;
