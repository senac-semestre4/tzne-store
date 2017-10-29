import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';

//Modules
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule, routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './layout/simpleLayout/simple-layout.component';
import { FullLayoutComponent } from './layout/fullLayout/full-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    PagesModule,
    ServicesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [/* AppComponent */FullLayoutComponent]
})
export class AppModule { }
