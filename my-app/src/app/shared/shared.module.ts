import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRequestsComponent } from "./my-requests/my-requests.component";
import { P404Component } from '../shared/404/404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MyRequestsComponent,
    P404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MyRequestsComponent,
    P404Component
  ]
})
export class SharedModule { }
