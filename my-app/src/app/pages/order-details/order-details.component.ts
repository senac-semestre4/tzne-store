import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  //dados para o modal
  private produtosNoCarrinho: any;
  public modalRef: BsModalRef;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  private formaEntrega : string = "";
  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;
  private frete: any;
  private valortotalCompra: number = 0;
  private dadosCartaoNames: any;
  private dadosCartao: any = {
    'numeroCartao': {
      'value': '',
      'error': false
    },
    'numeroimpressoCartao': {
      'value': '',
      'error': false
    },
    'validade': {
      'mes': '',
      'ano': '',
      'error': false
    },
    'codigoSeguranca': {
      'value': '',
      'error': false
    },
    'parcelas': {
      'value': '',
      'error': false
    },
  }

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + i['valorAtual']);
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
  }

  selecionaEntrega(event){
    if(event.target.tagName == 'A'){
      event.target.childNodes[1].checked = true;
    }else{
      event.target.parentNode.children["0"].checked = true;
    }
  }

  /* public openModal (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  } */

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }

  public finalizarPagamento(){
    let listaError = []
    this.dadosCartaoNames = Object.keys(this.dadosCartao);

    /* for (var i = 0; i < this.dadosCartaoNames.length; i++) {
      this.dadosCartao[ this.dadosCartaoNames[ i] ][ 'value' ] === '' || this.dadosCartao[ this.dadosCartaoNames[ i ] ][ 'value' ] === null
      ? this.dadosCartao[ this.dadosCartaoNames[ i ] ][ 'error' ] = true : this.dadosCartao[ this.dadosCartaoNames[ i ] ][ 'error' ] = false;
      console.log(this.dadosCartao[ this.dadosCartaoNames[ i] ][ 'value' ])
    };

    for (var i = 0; i < this.dadosCartaoNames.length; i++) {
      if (this.dadosCartao[ this.dadosCartaoNames[ i ] ][ 'errors' ] === true) {
          listaError.push( this.dadosCartao[ this.dadosCartaoNames[ i ] ]);
      }
    } */
    /* if(listaError.length > 0){
      return true;
    }
    return false; */
  }

}
