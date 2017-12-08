import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { CartComponent } from './pages/cart/cart.component';
import { P404Component } from './shared/404/404.component';
import { SimpleLayoutComponent } from './layout/simpleLayout/simple-layout.component';
import { FullLayoutComponent } from './layout/fullLayout/full-layout.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { MyCadastreComponent } from './pages/client/my-cadastre/my-cadastre.component';
import { MyAccountComponent } from './pages/client/my-account/my-account.component';
import { Erro404Component } from './pages/erro-404/erro-404.component';
import { LoginComponent } from './pages/client/login/login.component';
import { MyCadastreInitialComponent } from './pages/client/my-cadastre-initial/my-cadastre-initial.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  // For empty routes
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Routes for components
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home/type',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'client',
    component: ClientComponent,
    data: {
      title: "Cliente"
    },
    children: [
      {
        path: '',
        loadChildren: './pages/client/client.module#ClientModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      }
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart/empty',
    component: CartComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart/details',
    component: OrderDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cadastre/:id',
    component: MyCadastreInitialComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
        canLoad: [AuthGuard]
  },
  /* {
    path: 'cadastre/:id',
    component: MyCadastreComponent,
    pathMatch: 'full',
  }, */
  {
    path: 'login/:id',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
        canLoad: [AuthGuard]
  },
  {
    path: 'account/cart/details',
    component: MyAccountComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
        canLoad: [AuthGuard]

  },

  // Route for page 404
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '404',
        component: Erro404Component,
        data: {
          title: '404'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

