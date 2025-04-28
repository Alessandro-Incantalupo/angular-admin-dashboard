import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { inject, computed } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { User } from '../models/user.model';
import { UsersService } from '@features/users/services/user.service';

type State = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

export const UsersStore = signalStore(
  withState(initialState),
  withComputed(({ users, error }) => ({
    hasUsers: computed(() => users().length > 0),
    hasError: computed(() => !!error()),
  })),
  withMethods((state, userService = inject(UsersService)) => {
    const loadUsers = rxMethod<void>(() => {
      patchState(state, { loading: true, error: null });

      return userService.getUsers().pipe(
        tapResponse({
          next: users => patchState(state, { users, loading: false }),
          error: () =>
            patchState(state, {
              loading: false,
              error: 'Failed to load users',
            }),
        })
      );
    });

    const reset = () => patchState(state, initialState);

    return { loadUsers, reset };
  }),
  withHooks(({ loadUsers }) => ({
    onInit: () => {
      loadUsers();
    },
  }))
);
