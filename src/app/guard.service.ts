import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService {
    constructor(public router: Router) {}
  canActivate(user: any, username: any, Password: any): boolean {
    if (!user.isAuthenticated(username, Password)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
