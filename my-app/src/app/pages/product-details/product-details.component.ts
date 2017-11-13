import { Component, ViewChild, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from '../../services/messages.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  private products;
  //private id: number;
  private nome: string;
  private imagem: string;
  private descricao: string;
  private especificacao: string;
  private valorAtual: number;
  private valorAntigo: number;
  private porcentagemDesconto: number;
  private produtoEmDestaque : boolean;
  private id: any;
  private prod: object;
  private api: any;
  private ListaProdutos = [{}];
  public msgs: Message[] = [];

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private msg: MensagensService,

  ){ }

  ngOnInit(): void {
    this.api = this.routeParams.params.subscribe(params => {
        this.id = params['id'];
    });
    this.produtos.buscarProdutos()
        .then( result => {
        console.log(result);
        this.ListaProdutos = result.filter(i => i['product_id'] == this.id );
      })
      .catch( error => {
        console.log(error);
    });
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

  private adicionarSacola(){
    this.produtos.setProdutoCarrinho(this.ListaProdutos);
    this.alertarStatus( 'success', 'Adicionado!', 'Camiseta adicionada na sacola.' );

  }
}
