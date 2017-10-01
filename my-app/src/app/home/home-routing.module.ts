import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ShowcaseComponent } from './showcase/showcase.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: "Home"
    },
    children: [
      {
        path: 'detalhe',
        component: ProductComponent,
        data: {
          title: 'Detalhes do produto'
        }
      },
      {
        path: 'lista',
        component: ShowcaseComponent,
        data: {
          title: 'Lista de produtos'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
