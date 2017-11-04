import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

//rota principal
import { AppRoutingModule } from './app.routing';

//components
import { AppComponent } from './app.component';

//Modules
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './layout/simpleLayout/simple-layout.component';
import { FullLayoutComponent } from './layout/fullLayout/full-layout.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    PagesModule,
    ServicesModule,
    SharedModule,
  ],
  providers: [ApiService],
  bootstrap: [/* AppComponent */FullLayoutComponent]
})
export class AppModule { }
