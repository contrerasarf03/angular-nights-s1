import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: ProfileComponent,
    path: 'profile',
  },
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        component: HomeComponent,
        path: 'home',
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
