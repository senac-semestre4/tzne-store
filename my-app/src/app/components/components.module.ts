import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarrinhoComponent } from './carrinho/carrinho.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CarrinhoComponent,
  ],
  exports: [
    CarrinhoComponent,
  ]
})
export class ComponentsModule { }
