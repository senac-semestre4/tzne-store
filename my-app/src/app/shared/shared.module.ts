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
import { LoadComponent } from './load/load.component';

@NgModule({
  declarations: [
    P404Component,
    CollapseComponent,
    LoadComponent,
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
    FormsModule,
    LoadComponent
  ]
})
export class SharedModule { }
