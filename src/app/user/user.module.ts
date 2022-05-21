import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../layouts/header/header.component";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
  declarations: [UserComponent, HeaderComponent],
  imports: [
    UserRoutingModule,
    UserComponent,
    RouterModule
  ]
})
export class UserModule {}