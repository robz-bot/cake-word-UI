import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServicesService {
  constructor() {}
  loginService(username: string, password: string): string {
    if (username == 'admin' && password == 'admin') {
      sessionStorage.setItem('UserType', username);
      return 'admin';
    }
    if (username == 'customer' && password == 'customer') {
      sessionStorage.setItem('UserType', username);
      return 'customer';
    }
    if (username == 'delivery' && password == 'delivery') {
      sessionStorage.setItem('UserType', username);
      return 'delivery';
    }
  }
}
