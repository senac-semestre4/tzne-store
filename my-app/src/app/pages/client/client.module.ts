//import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
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
    MyCadastreInitialComponent
  ],
  imports: [
    //TooltipModule.forRoot(),
    //FormsModule,
    //CarouselModule.forRoot(),
    //ClientModule,
    //SharedModule,
    TabsModule.forRoot(),
    CommonModule,
    ClientRoutingModule
  ],
  exports:[
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent,
    LoginComponent,
    MyRequestsComponent,
    ClientRoutingModule,
    MyCadastreInitialComponent
  ],
  providers: [
    ClientRoutingModule
  ]
})
export class ClientModule { }
