import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ClientComponent } from './client.component';
import { MyAccessComponent } from "./my-access/my-access.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyAdressesComponent } from "./my-adresses/my-adresses.component";
import { MyCadastreComponent } from "./my-cadastre/my-cadastre.component";
import { LoginComponent } from './login/login.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AttendanceComponent } from './attendance/attendance.component';

// rota
import { ClientRoutingModule } from './client.routing';

@NgModule({
  declarations: [
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent,
    LoginComponent,
    MyRequestsComponent,
    AttendanceComponent
  ],
  imports: [
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
    ClientRoutingModule
  ],
  providers: [
    ClientRoutingModule
  ]
})
export class ClientModule { }
