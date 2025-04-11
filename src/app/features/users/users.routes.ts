import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./pages/user-list/user-list.component'),
  },
] satisfies Routes;
