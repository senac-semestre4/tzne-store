import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Component
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NewslatterComponent } from "./newslatter/newslatter.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NewslatterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NewslatterComponent
  ]
})
export class LayoutModule { }
