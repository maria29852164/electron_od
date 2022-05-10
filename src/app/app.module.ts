import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './layouts/header/header.component';
import {ExtendedModule, FlexModule} from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';
import {AdminComponent} from "./admin/admin.component";
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
      AdminComponent,
      AdminDetailComponent,
      DetailUserComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FlexModule,
        ExtendedModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
