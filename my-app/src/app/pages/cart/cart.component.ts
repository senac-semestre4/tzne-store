import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { MensagensService } from '../../services/messages.service';
import { Message } from 'primeng/primeng';

@Component({
	selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  private totalCartValue$: number;
  private totalCartItems$: number;
  private produtosNoCarrinho: any;
  public msgs: Message[] = [];

  constructor(
    private msg: MensagensService,
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

	ngOnInit() {
    this.totalCartValue$ = 1;
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.totalCartItems$ = this.produtosNoCarrinho.length;
    console.log(this.produtosNoCarrinho, "Cart")
    console.log(this.totalCartItems$, "Tamanho do Carrinho")
  }

  initMsgs(){
    let status = this.msg.getStatus();
    if ( status != null ) this.alertarStatus( status['tipo'], status['titulo'], status['msg'] );
    this.msg.limparStatus();
  }

  private alertarStatus( tipo: string, titulo: string, msg: string ) {
    this.msgs = [];
    this.msgs.push( { severity: tipo, summary: titulo, detail: msg } );
  }

  private limparStatus() {
    this.msgs = [];
  }

  private detalhesCompra(): void {
    if(this.produtos.getverificarFrete()){
      this.router.navigate(['/cart/details/'])
    }
    else{
      console.log("PREENCHA O CEP");
      this.alertarStatus( 'error', 'OPS!', 'Informe o CEP para prosseguir!' );
    }
  }

  removerDoCart(id){
    this.produtosNoCarrinho.filter(i => {
      if(i['product_id'] == id)
        if(i['quantidade'] > 1){
          i['quantidade']--;
        } else{
          this.produtosNoCarrinho.pop(i => i['product_id'] == id);
        }
    })
    this.localStorageService.set('addCart', this.produtosNoCarrinho);
    if(this.produtosNoCarrinho.length == 0){
      this.router.navigate(['/cart/empty'])
    }
  }
}

