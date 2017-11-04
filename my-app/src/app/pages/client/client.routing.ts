import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { MyAccountComponent } from './my-account/my-account.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyCadastreComponent } from './my-cadastre/my-cadastre.component';
import { MyAccessComponent } from './my-access/my-access.component';
import { MyAdressesComponent } from './my-adresses/my-adresses.component';
import { AttendanceComponent } from './attendance/attendance.component';


const clienteRoutes: Routes = [
    {
      path: 'minha-conta',
      component: MyAccountComponent,
    },
    {
      path: 'meus-pedidos',
      component: MyRequestsComponent
    },
    {
      path: 'meu-cadastro',
      component: MyCadastreComponent
    },
    {
      path: 'meu-acesso',
      component: MyAccessComponent
    },
    {
      path: 'meu-endereco',
      component: MyAdressesComponent
    },
    {
      path: 'atendimento',
      component: AttendanceComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}
