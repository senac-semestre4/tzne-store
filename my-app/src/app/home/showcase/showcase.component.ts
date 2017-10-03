import { Component, OnInit } from '@angular/core';
//service
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {

  private products: any;
  private boxComprar: boolean = false;


  constructor(private produtos: ProductService) {
  }

  ngOnInit() {
    this.products = this.produtos.getProdutosEmDestaque();
  }


  mostraBoxComprar(event) {
    this.boxComprar = true;
  }

  ocultaBoxComprar() {
    this.boxComprar = false;
  }

}
