import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P404Component } from '../shared/404/404.component';
import { RouterModule } from '@angular/router';
import { CollapseComponent } from './collapse/collapse.component';

import { 
  KzMaskDirective,
  KzMaskCurrencyDirective,
} from './';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    P404Component,
    CollapseComponent,
    KzMaskDirective,
    KzMaskCurrencyDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  	FormsModule 
  ],
  exports:[
    P404Component,
    KzMaskDirective,
    KzMaskCurrencyDirective,
    CommonModule, 
    FormsModule
  ]
})
export class SharedModule { }
