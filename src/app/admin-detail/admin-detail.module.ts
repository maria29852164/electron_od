import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminDetailComponent} from "./admin-detail.component";
import {AdminDetailRoutingModule} from "./admin-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminDetailComponent],
  imports: [
    CommonModule,
      AdminDetailRoutingModule,
      RouterModule
  ],
  exports:[
      AdminDetailComponent
  ]
})
export class AdminDetailModule { }
