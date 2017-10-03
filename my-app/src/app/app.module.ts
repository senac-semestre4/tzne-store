import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NewslatterComponent } from './layout/newslatter/newslatter.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { BannerHomeComponent } from './home/banner-home/banner-home.component';
import { CartComponent } from './cart/cart.component';

//services
import { ProductService } from './services/product.service';
import { ClientComponent } from './client/client.component';
import { MyAccountComponent } from './client/my-account/my-account.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { MyCadatreComponent } from './client/my-cadatre/my-cadatre.component';
import { MyAccessComponent } from './client/my-access/my-access.component';
import { MyAdressesComponent } from './client/my-adresses/my-adresses.component';

//import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    //AppRoutingModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ShowcaseComponent,
    BannerHomeComponent,
    CartComponent,
    NewslatterComponent,
    ClientComponent,
    MyAccountComponent,
    MyRequestsComponent,
    MyCadatreComponent,
    MyAccessComponent,
    MyAdressesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
