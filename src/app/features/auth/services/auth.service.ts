import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  isAuthenticated = signal(!!localStorage.getItem(this.tokenKey)); // Reactive signal

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated.set(true);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.set(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
