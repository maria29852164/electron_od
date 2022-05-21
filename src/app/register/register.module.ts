import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layouts/header/header.component';



@NgModule({
  declarations: [RegisterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
