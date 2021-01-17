import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GuardService as AuthGuard } from './guard.service';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
