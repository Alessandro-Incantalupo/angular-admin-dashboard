import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserTableComponent } from '@features/users/components/user-table/user-table.component';
import { User } from '@features/users/models/user.model';
import { UsersStore } from '@features/users/state/user.store';
import { TranslocoDirective } from '@jsverse/transloco';

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
    this.userStore.deleteUser(user.id);
  }

  addUser() {
    this.userStore.addUser({
      id: crypto.randomUUID(),
      name: 'New User',
      email: 'new@example.com',
      role: 'user',
      status: 'active',
    });
  }
}
