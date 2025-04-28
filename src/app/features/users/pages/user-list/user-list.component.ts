import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { UsersStore } from '@features/users/state/user.store';
import { User } from '@features/users/models/user.model';
import { UserTableComponent } from '@features/users/components/user-table/user-table.component';

@Component({
  selector: 'app-user-list',
  imports: [TranslocoDirective, UserTableComponent],
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
  onEdit(user: User) {
    console.log('Edit user:', user);
  }

  onDelete(user: User) {
    console.log('Delete user:', user);
  }
}
