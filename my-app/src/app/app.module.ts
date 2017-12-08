import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';

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
//service
import { ApiService } from './services/api.service';
import { MensagensService } from './services/messages.service';
import { LocalStorageModule } from "angular-2-local-storage/dist";
import { ClientModule } from './pages/client/client.module';
import { AuthGuard } from './guards/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    ClientModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    PagesModule,
    ServicesModule,
    SharedModule,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
  ],
  providers: [
    ApiService,
    MensagensService,
    AuthGuard
  ],
  bootstrap: [/* AppComponent */FullLayoutComponent]
})
export class AppModule { }
