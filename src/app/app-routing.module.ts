import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import {AdminComponent} from "./admin/admin.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
const routes: Routes = [
  {
    path:'user',
  component: UserComponent
  },
  {
    path:'admins',
    component: AdminComponent
  },
  {
    path:'detail-user/:name',
    component: DetailUserComponent
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {     }
