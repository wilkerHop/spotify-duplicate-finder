import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  // ...
  // get the authorization and refresh token and give a try to some spotify calls
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log({token});

    // Check whether the token is expired and return
    // true or false
    return false;
  }
}
