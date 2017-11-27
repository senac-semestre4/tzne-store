import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';

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

  private formaEntrega: string = "";
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
  private validar: boolean = true;
  public disabled: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private produtos: ProductService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + (parseInt(i['product_purchase_price']) * i['quantidade']));
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
  }

  selecionaEntrega(event) {
    if (event.target.tagName == 'A') {
      event.target.childNodes[1].checked = true;
    } else {
      event.target.parentNode.children["0"].checked = true;
    }
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
  }

  somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
  }

  public veriricarPreenchimento() {
    let listaError = []
    this.dadosCartaoNames = Object.keys(this.dadosCartao);

    for (var i = 0; i < this.dadosCartaoNames.length; i++) {
      if (this.dadosCartaoNames != 'validade') {
        this.dadosCartao[this.dadosCartaoNames[i]]['value'] === '' ||
          this.dadosCartao[this.dadosCartaoNames[i]]['value'] === null
          ? this.dadosCartao[this.dadosCartaoNames[i]]['error'] = true
          : this.dadosCartao[this.dadosCartaoNames[i]]['error'] = false
      }
    };

    this.dadosCartao['validade']['mes'] === '' ||
    this.dadosCartao['validade']['mes'] === null
    this.dadosCartao['validade']['ano'] === '' ||
      this.dadosCartao['validade']['ano'] === null
      ? this.dadosCartao['validade']['error'] = true
      : this.dadosCartao['validade']['error'] = false;

      for (var i = 0; i < this.dadosCartaoNames.length; i++) {
      if (this.dadosCartao[this.dadosCartaoNames[i]]['error'] === true) {
        this.validar = true;
        return false;
      }
    }
    this.validar = false;
    return true;
  }

  public finalizarPagamento() {
    if (this.veriricarPreenchimento()) {
      this.produtos.setPagamento(true);
      this.router.navigate(['/client/meus-pedidos/']);
    }
  }
}
/*  */
