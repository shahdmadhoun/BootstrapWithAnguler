import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(public router: Router) {}
  username: String = 'shahd@gmail.com';
  userPassword: String = '1234';
  public isAuthenticated(email: any, Password: any): boolean {
    if (
      localStorage.getItem('log') == 'log' &&
      this.username == email &&
      this.userPassword == Password
    ) {
      console.log('this user is authnticated');
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('this user is not authnticated');
      return false;
    }
  }}
