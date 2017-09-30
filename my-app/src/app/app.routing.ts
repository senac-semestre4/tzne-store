import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts

//import { FullLayoutComponent } from './layouts/full-layout.component';
//import { PortalLayoutComponent } from './layouts/portal-layout.component';
//import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'conteudos',
    component: HomeComponent,
    data: {
      title: "Conteúdos"
    },
  }
  /* {
    path: 'conteudos',
    component: FullLayoutComponent,
    data: {
      title: "Conteúdos"
    },
    children: [
      {
        path: '',
        loadChildren: './conteudos/conteudos.module#ConteudosModule',
      }
    ]
  },
  {
    path: 'componentes',
    component: FullLayoutComponent,
    data: {
      title: "Componentes"
    },
    children: [
      {
        path: '',
        loadChildren: './componentes/componentes.module#ComponentesModule',
      }
    ]
  } ,
  {
    path: 'paginas',
    component: FullLayoutComponent,
    data: {
      title: "Páginas"
    },
    children: [
      {
        path: '',
        loadChildren: './paginas/paginas.module#PaginasModule',
      }
    ]
  } */
  /* {
    path: 'portal',
    component: PortalLayoutComponent,
    data: {
      title: "Portal"
    },
    children: [
      {
        path: '',
        loadChildren: './portal/portal.module#PortalModule',
      }
    ]
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    data: {
      title: 'Painel'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'paginas',
        loadChildren: './paginas/paginas.module#PaginasModule'
      },
      {
        path: 'conteudos',
        loadChildren: './conteudos/conteudos.module#ConteudosModule'
      },
      {
        path: 'componentes',
        loadChildren: './componentes/componentes.module#ComponentesModule'
      },
      {
        path: "usuario",
        loadChildren: './usuario/usuarios.module#ListaUsuariosModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
