import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Component
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NewslatterComponent } from "./newslatter/newslatter.component";
import { SimpleLayoutComponent } from './simpleLayout/simple-layout.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NewslatterComponent,
    SimpleLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NewslatterComponent,
    SimpleLayoutComponent
  ]
})
export class LayoutModule { }
