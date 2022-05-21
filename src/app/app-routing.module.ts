import { Component, NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import {AdminComponent} from "./admin/admin.component";
import { AdminDetailComponent } from './admin-detail/admin-detail.component';

import {DetailUserComponent} from "./detail-user/detail-user.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
const routes: Routes = [
  {
    path:'user',
  component: UserComponent
  },
  {
    path:'admins',
    component: AdminComponent,

  },
  {
    path:'detail-admin/:id',
    component:AdminDetailComponent
  
  },
  {
    path:'detail-user/:name',
    component: DetailUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {     }
