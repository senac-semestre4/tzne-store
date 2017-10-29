import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { CartComponent } from './pages/cart/cart.component';
import { P404Component } from './shared/404/404.component';
import { SimpleLayoutComponent } from './layout/simpleLayout/simple-layout.component';
import { FullLayoutComponent } from './layout/fullLayout/full-layout.component';

export const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
   {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },

  //page 404
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '404',
        component: P404Component,
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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


 /* {
    path: 'home',
    component: FullLayoutComponent,
    pathMatch: 'full',
      children: [
       {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule',
      }
     ]
  }, */
