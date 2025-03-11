import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { PATHS } from '../../core/costants/routes';
import { SvgIconComponent } from 'angular-svg-icon';
import { ThemeService } from '../../core/services/theme.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
  imports: [SvgIconComponent, ButtonComponent, RouterLink],
})
export default class ProfileComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);
  themeService = inject(ThemeService);

  state = this.router.getCurrentNavigation()?.extras.state;
  userData: { [key: string]: any } | undefined = undefined;
  username: string = 'Guest';

  public themeColors = [
    {
      name: 'base',
      code: '#e11d48',
    },
    {
      name: 'yellow',
      code: '#f59e0b',
    },
    {
      name: 'green',
      code: '#22c55e',
    },
    {
      name: 'blue',
      code: '#3b82f6',
    },
    {
      name: 'orange',
      code: '#ea580c',
    },
    {
      name: 'red',
      code: '#cc0022',
    },
    {
      name: 'violet',
      code: '#6d28d9',
    },
  ];

  themeMode = ['light', 'dark'];

  constructor() {
    // Get user data from state
    this.userData = this.state?.['userData'];

    // Get username from route parameters
    this.route.params.subscribe((params) => {
      this.username = params['username']; // Read the :username parameter
    });
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
