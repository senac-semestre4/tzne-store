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
import { HomeComponent } from './home/home/home.component';
import { ProductComponent } from './home/product/product.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { BannerHomeComponent } from './home/banner-home/banner-home.component';
import { NewslatterComponent } from './layout/newslatter/newslatter.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

//services
import { ProductService } from './services/product.service';

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
    CarrinhoComponent,
    NewslatterComponent
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
