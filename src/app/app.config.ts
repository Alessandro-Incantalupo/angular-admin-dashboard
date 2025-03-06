import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import packageJson from '../../package.json';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';
import { APP_INFO } from './core/tokens/version.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAngularSvgIcon(),
    provideHttpClient(),
    providePrimeNG(),
    {
      provide: APP_INFO,
      useValue: {
        name: packageJson.name,
        version: packageJson.version,
      },
    },
  ],
};
