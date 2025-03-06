import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { MenuService } from '../../services/menu.service';
import { APP_INFO } from '../../../../core/tokens/version.token';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  menuService = inject(MenuService);
  appJson = inject(APP_INFO);

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
