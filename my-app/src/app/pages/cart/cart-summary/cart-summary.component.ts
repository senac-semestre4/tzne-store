import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;

  constructor(
        private produtos: ProductService
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + i['valorAtual']);
    this.parcelas = (this.valorTotal / 3);
  }

}
