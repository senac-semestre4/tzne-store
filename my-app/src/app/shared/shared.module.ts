import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { MyRequestsComponent } from "./my-requests/my-requests.component";

@NgModule({
  declarations: [
    CartSummaryComponent,
    MyRequestsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CartSummaryComponent,
    MyRequestsComponent
  ]
})
export class SharedModule { }
