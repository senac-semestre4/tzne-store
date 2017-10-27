import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

//Services
import { ProductService } from "./product.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [],
  providers: [
    ProductService
  ]
})
export class ServicesModule { }
