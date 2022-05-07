import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminRouterModule} from "./admin-routing.module";
import {AdminService} from "../services/admin-service";
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
    declarations: [AdminComponent],
    imports: [
        AdminRouterModule,
        CommonModule,


        RouterModule,
        BrowserModule,
        FlexLayoutModule

    ],


})
export class UserModule {}
