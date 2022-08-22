import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {CreateUserEmplojeeComponent} from './pages/admin/create-user-emplojee/create-user-emplojee.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'adminDashboard', component:DashboardComponent},
  {path: 'createUserEmplojee', component: CreateUserEmplojeeComponent},
  {path: 'updateUserEmplojee/:id', component: CreateUserEmplojeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
