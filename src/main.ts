import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstraps the standalone app using modern Angular API (no AppModule needed)
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
