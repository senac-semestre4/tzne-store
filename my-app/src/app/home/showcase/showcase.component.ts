import { Component, OnInit } from '@angular/core';

import { ProductService } from "../../product/product.service";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  providers: [ProductService]
})
export class ShowcaseComponent{
  
  boxComprar : boolean = false;

  mostraBoxComprar(event){
    this.boxComprar = true;
  }

  ocultaBoxComprar(){
    this.boxComprar = false;
  }
}
