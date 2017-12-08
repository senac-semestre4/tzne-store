import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';
import { Headers, Http } from '@angular/http';


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

  private itensVenda = {
    "product_product_has_id": null,
    "product_name": "",
    "unit_price": null,
    "quantity": null,
    "subtotal": null
  }
  private resultVendaCliente: any[];
  private vendaAPI: any = [];
  private bkpCart: any;
  private compraEfetuada: any;
  private date: Date;
  private formaEntrega: string = "";
  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;
  private frete: any;
  private valortotalCompra: number = 0;
  private bkpLista: any = [];
  private venda: any;
  private resultvenda: any;
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

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
    private router: Router,
    private http: Http,
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + (parseInt(i['product_purchase_price']) * i['quantidade']));
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    if(this.frete == null || this.frete == undefined){
      this.frete = this.localStorageService.get('cep')
    }
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    console.log(this.localStorageService.get('idVenda'))

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

  // pegar esses dados e salvar no services de produtos e recuperar os dados no my-request
  insertCart(){
    let teste = this.localStorageService.get('idVenda')
    console.log(teste['PHPSESSID'])
    this.produtosNoCarrinho.filter(i => {
      this.itensVenda = {
        "product_product_has_id": i['product_has_id'],
        "product_name": i['product_name'],
        "unit_price": i['product_purchase_price'],
        "quantity": i['quantidade'],
        "subtotal": parseInt(i['product_purchase_price']) * i['quantidade']
      }
      this.vendaAPI.push(this.itensVenda)
      i++;
    })
    this.venda = {
      "PHPSESSID": teste['PHPSESSID'],
      "client_client_id": 1,
      "total_partial": this.valortotalCompra,
      "amount": 115,
      "discount": 0,
      "type_freight": "correios",
      "value_freight": this.frete,
      "number_plots": this.produtosNoCarrinho.length,
      "itens": this.vendaAPI
    }

    this.carrinho();
    this.vendaFeita()
  }

  carrinho() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('json', JSON.stringify(this.venda));
    let body = urlSearchParams.toString()
    this.http.post('http://tzne.kwcraft.com.br/api/venda/inserevenda', body, { headers: headers })
      .subscribe(result => {
        console.log(result.json());
         if(result.json()['autenticado'] == false){
          this.router.navigate(['/login/2']);
          return;
        } else{
          this.localStorageService.set('addCart', []);
        }
        this.resultvenda = result.json();
      }, error => {
        console.log(error.json());
      });
  }

  vendaFeita(){
    this.produtos.getVenda(1)
        .then( result => {
        console.log(result);
        this.resultVendaCliente = result;
        console.log(this.resultVendaCliente);
      })
      .catch( error => {
        console.log(error);
    });
  }

  public finalizarPagamento() { 
    
    if (this.veriricarPreenchimento()) {
      this.insertCart();
      this.produtos.setPagamento(true);
      this.router.navigate(['/client/meus-pedidos/']);
    }
  }
}
