import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  private totalCartValue$: number;
  private totalCartItems$: number;
  private produtosNoCarrinho: any;
  /* totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>; */

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router
  ) { }

	ngOnInit() {
    this.totalCartValue$ = 1;
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.totalCartItems$ = this.produtosNoCarrinho.length;

    console.log(this.produtosNoCarrinho, "Cart")
    console.log(this.totalCartItems$, "Tamanho do Carrinho")
  }

  private detalhesCompra(): void {
    this.router.navigate(['/cart/details/'])
  }
}
