import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
  declarations: [UserComponent],
  imports: [
    UserRoutingModule,
    UserComponent,
    RouterModule
  ]
})
export class UserModule {}