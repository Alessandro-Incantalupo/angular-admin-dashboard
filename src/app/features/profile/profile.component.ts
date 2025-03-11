import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styles: ``,
})
export default class ProfileComponent {
  router = inject(Router);
  state = this.router.getCurrentNavigation()?.extras.state;

  userData: { [p: string]: any } | undefined = undefined;

  constructor() {
    this.userData = this.state?.['userData'];
  }
}
