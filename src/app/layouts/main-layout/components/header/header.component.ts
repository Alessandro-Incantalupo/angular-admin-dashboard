import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    SvgIconComponent,
    NavbarMenuComponent,
  ],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {

}
