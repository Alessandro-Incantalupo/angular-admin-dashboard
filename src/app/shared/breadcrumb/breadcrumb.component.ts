import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styles: ``,
})
export class BreadcrumbComponent {
  router = inject(Router);

  items = input.required<
    {
      label: string;
      route?: string;
      routeState?: { [k: string]: unknown };
    }[]
  >();

  navigateTo(item: { route?: string }) {
    if (item.route) {
      this.router.navigate([item.route]); // ✅ Navigate only if route exists
    }
  }
}
