import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* import { ModalModule } from 'ng2-bootstrap/modal'; */
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  exports: [
    HomeComponent,
    ProductComponent

  ]
})
export class HomeModule { }
