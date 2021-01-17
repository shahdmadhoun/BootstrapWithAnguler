import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardService } from '../guard.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public router: Router,
    public user: UserService,
    public userG: GuardService
  ) {}

  ngOnInit(): void {}
  username: any;
  password: any;

  log() {
    if (
      this.user.isAuthenticated(this.username, this.password) &&
      this.userG.canActivate(this.user, this.username, this.password)
    ) {
      this.router.navigate(['profile']);
    }
  }

}
