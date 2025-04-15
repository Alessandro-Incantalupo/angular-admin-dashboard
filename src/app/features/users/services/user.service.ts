import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User, UsersResponse } from '../models/user.model';
import { injectBaseUrl } from '@core/CIF/inject-base-url';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);
  private readonly createUrlRemote = injectBaseUrl();

  private readonly usersUrl = this.createUrlRemote(
    '/mocks/Users.json',
    () => `/users`
  );

  getUsers() {
    return this.http.get<UsersResponse>(this.usersUrl).pipe(
      delay(600), // remove in prod
      map(response => response.data)
    );
  }

  // (optional for Day 2)
  // addUser(user: User) { ... }
  // updateUser(user: User) { ... }
}
