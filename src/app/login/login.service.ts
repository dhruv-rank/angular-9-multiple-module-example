import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isLonggedIn: boolean = false;
  constructor() { }

  login() {
    this.isLonggedIn = true;
  }

  logout() {
    this.isLonggedIn = false;
  }

  userLoginStatus() {
    return this.isLonggedIn;
  }


}
