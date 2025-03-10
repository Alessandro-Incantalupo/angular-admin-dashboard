import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-sign-up',
  imports: [SvgIconComponent, RouterLink, ButtonComponent],
  templateUrl: './sign-up.component.html',
  styles: ``,
})
export default class SignUpComponent {}
