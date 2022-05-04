import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './layouts/header/header.component';
import {ExtendedModule, FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FlexModule,
        ExtendedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
