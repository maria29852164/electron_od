import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {DetailUserComponent} from "./detail-user.component";
import {DetailUserRoutingModule} from "./detail-user-routing.module";

@NgModule({
    declarations: [DetailUserComponent],
    imports: [
        DetailUserRoutingModule,
        RouterModule
    ]
})
export class DetailUserModule {}
