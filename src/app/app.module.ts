import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './layouts/header/header.component';
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> d665ca3a4425351746ddd88f5bf772b4ec05d575

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
        ExtendedModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
