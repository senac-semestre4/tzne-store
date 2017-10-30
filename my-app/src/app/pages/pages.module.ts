import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule, CarouselModule } from "ngx-bootstrap";
import { RouterModule } from '@angular/router';

//Component
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { BannerHomeComponent } from './home/banner-home/banner-home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { SearchCepComponent } from './cart/search-cep/search-cep.component';
import { EmptyCartComponent } from './cart/empty-cart/empty-cart.component';
import { Erro404Component } from './erro-404/erro-404.component';
import { Erro500Component } from './erro-500/erro-500.component';

//Module
import { ClientModule } from "./client/client.module";
import { SharedModule } from '../shared/shared.module';

// service
import { ProductService } from '../services/product.service';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerHomeComponent,
    ShowcaseComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchCepComponent,
    EmptyCartComponent,
    Erro404Component,
    Erro500Component
  ],
  imports: [
    RouterModule,
    CommonModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    ClientModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    BannerHomeComponent,
    ShowcaseComponent,
    ProductDetailsComponent,
    CartComponent,
    SearchCepComponent,
    EmptyCartComponent,
    Erro404Component,
    Erro500Component
    
  ],
  providers:[
    ProductService
  ]
})
export class PagesModule { }
