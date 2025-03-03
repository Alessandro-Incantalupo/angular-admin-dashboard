import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TieredMenu } from 'primeng/tieredmenu';
import { Ripple } from 'primeng/ripple';
import { Badge } from 'primeng/badge';
import { Toast } from 'primeng/toast';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-menu',
  imports: [
    TieredMenu,
    Toast,
    RouterLink,
    NgIf,
    NgClass,
  ],
  templateUrl: './navbar-menu.component.html',
  styles: ``,
})
export class NavbarMenuComponent implements OnInit {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  items: MenuItem[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Theming',
            route: '/theming',
          },
          {
            label: 'Colors',
            route: '/colors',
          },
        ],
      },
      {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
          this.router.navigate(['/installation']);
        },
      },
      {
        label: 'External',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Angular',
            url: 'https://angular.dev/',
          },
          {
            label: 'Vite.js',
            url: 'https://vitejs.dev/',
          },
        ],
      },
    ];
  }


}
