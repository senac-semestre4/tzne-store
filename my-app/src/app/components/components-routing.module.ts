import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: "Componentes"
    },
    children: [
      {
        path: 'carrinho',
        component: CarrinhoComponent,
        data: {
          title: 'Carrinho'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
