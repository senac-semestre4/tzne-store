//import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule, TabsModule, ButtonsModule, CarouselModule } from 'ngx-bootstrap';

import { DatePipe } from '@angular/common';

//components
import { ClientComponent } from './client.component';
import { MyAccessComponent } from "./my-access/my-access.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyAdressesComponent } from "./my-adresses/my-adresses.component";
import { MyCadastreComponent } from "./my-cadastre/my-cadastre.component";
import { LoginComponent } from './login/login.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MyCadastreInitialComponent } from './my-cadastre-initial/my-cadastre-initial.component';

// rota
import { ClientRoutingModule } from './client.routing';
import { SharedModule } from '../../shared/shared.module';
import { GrowlModule } from 'primeng/primeng';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent,
    LoginComponent,
    MyRequestsComponent,
    AttendanceComponent,
    MyCadastreInitialComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    SharedModule,
    TabsModule.forRoot(),
    CommonModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    SharedModule,
    GrowlModule,
    RouterModule
  ],
  exports: [
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent,
    LoginComponent,
    MyRequestsComponent,
    ClientRoutingModule,
    MyCadastreInitialComponent,
  ],
  providers: [
    ClientRoutingModule,
    ProductService,
    ApiService
  ]
})
export class ClientModule { }
