import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ClientComponent } from './client.component';
import { MyAccessComponent } from "./my-access/my-access.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyAdressesComponent } from "./my-adresses/my-adresses.component";
import { MyCadastreComponent } from "./my-cadastre/my-cadastre.component";

@NgModule({
  declarations: [
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ClientComponent,
    MyAccessComponent,
    MyAccountComponent,
    MyAdressesComponent,
    MyCadastreComponent
  ],
})
export class ClientModule { }
