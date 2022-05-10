import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { UserComponent } from './user/user.component'
import {AdminComponent} from "./admin/admin.component";
<<<<<<< HEAD
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
=======
import {DetailUserComponent} from "./detail-user/detail-user.component";
>>>>>>> 2f1b5447e9a5eb861135e0cb9a91ccee5bc37bec
const routes: Routes = [
  {
    path:'user',
  component: UserComponent
  },
  {
    path:'admins',
<<<<<<< HEAD
    component: AdminComponent,

  },
  {
    path:'admin-detail',
    component:AdminDetailComponent
=======
    component: AdminComponent
  },
  {
    path:'detail-user/:name',
    component: DetailUserComponent
>>>>>>> 2f1b5447e9a5eb861135e0cb9a91ccee5bc37bec
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {     }
