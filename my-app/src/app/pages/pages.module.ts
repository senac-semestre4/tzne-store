import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule, CarouselModule } from "ngx-bootstrap";

//Component
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { BannerHomeComponent } from './home/banner-home/banner-home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { SearchCepComponent } from './cart/search-cep/search-cep.component';

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
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    ClientModule,
    SharedModule
  ],
  exports:[
    ClientModule,
    OrderDetailsComponent
  ],
  providers:[
    ProductService
  ]
})
export class PagesModule { }
