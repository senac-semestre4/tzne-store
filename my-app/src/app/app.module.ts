import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//reta principal
import { AppRoutingModule } from './app.routing';

//components
import { AppComponent } from './app.component';

//Modules
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

//import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppRoutingModule,
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    LayoutModule,
    PagesModule,
    ServicesModule,
    SharedModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
