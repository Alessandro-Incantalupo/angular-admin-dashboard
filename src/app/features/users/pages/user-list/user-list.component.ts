import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { UsersStore } from '@features/users/state/user.store';

@Component({
  selector: 'app-user-list',
  imports: [TranslocoDirective],
  templateUrl: './user-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserListComponent {
  protected userStore = inject(UsersStore);
}
