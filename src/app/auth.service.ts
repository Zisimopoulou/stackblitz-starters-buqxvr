import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedUser = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }

  logout() {
    this.isAuthenticatedUser = false;
  }
}
