import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from '../../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {


  private produtosNoCarrinho: any;
  public modalRef: BsModalRef;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  /* private ListaProdutos: any; */

  private compraEfetuada: any;
  private date: Date;
  private formaEntrega : string = "";
  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;
  private frete: any;
  private valortotalCompra: number = 0;
  private bkpLista: any[];

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + parseInt(i['product_purchase_price']));
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    this.compraEfetuada = this.produtos.getPagamento();
    this.date = new Date();

    /* this.gravarCarrinho();
    if(this.produtosNoCarrinho.lenght == 0){
      this.produtosNoCarrinho = this.localStorageService.get('detailsOdd') as object[];
    }
    else{
      this.bkpLista = this.localStorageService.get('detailsOdd') as object[];
      this.localStorageService.set('detailsNew', this.produtosNoCarrinho);
    } */

    //this.produtos.setProdutoCarrinho([]);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }

  gravarCarrinho(){
    console.log(this.localStorageService.get('detailsNew') as object[])
  }

  //api para get details cart

  /* getDetailsCart(){
    this.produtos.getDetailsCart()
        .then( result => {
        console.log(result);
        this.ListaProdutos = result;
      })
      .catch( error => {
        console.log(error);
    });
  } */

  /* ngOnInit() {

    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + parseInt(i['product_purchase_price']));
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    this.compraEfetuada = this.produtos.getPagamento();
    this.date = new Date();

    this.gravarCarrinho();
    if(this.produtosNoCarrinho.lenght == 0){
      this.produtosNoCarrinho = this.localStorageService.get('detailsOdd') as object[];
    }
    else{
      this.bkpLista = this.localStorageService.get('detailsOdd') as object[];
      this.localStorageService.set('detailsNew', this.produtosNoCarrinho);
    }

    this.produtos.setProdutoCarrinho([]);

  } */


  /* if(this.precoTotal.lenght == 0){
      this.precoTotal = this.localStorageService.get('detailsOdd') as object[];
      this.valorTotal = this.localStorageService.get('valorTotal') as number;
    } else {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + parseInt(i['product_purchase_price']));
    this.localStorageService.set('valorTotal', this.valorTotal);
    }
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    this.compraEfetuada = this.produtos.getPagamento();
    this.date = new Date();

    this.gravarCarrinho();
    if(this.produtosNoCarrinho.lenght == 0){
      this.produtosNoCarrinho = this.localStorageService.get('detailsOdd') as object[];
    }
    else{
      this.bkpLista = this.localStorageService.get('detailsOdd') as object[];
      this.localStorageService.set('detailsNew', this.produtosNoCarrinho);
    }

    this.produtos.setProdutoCarrinho([]);
 */

}
