import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from '../../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, Http } from '@angular/http';



@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  resultVendaCliente: any[];


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

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService,
    private localStorageService: LocalStorageService,
    private http: Http,
  ) { }

  // tirar o post daqui e colocar no botão do finalizar compra

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + parseInt(i['product_purchase_price']) * i['quantidade']);
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    console.log(this.valortotalCompra);
    this.compraEfetuada = this.produtos.getPagamento();
    this.date = new Date();

    this.produtosNoCarrinho.filter(i => {
      this.itensVenda = {
        "product_product_has_id": i['product_has_id'],
        "product_name": i['product_name'],
        "unit_price": i['product_purchase_price'],
        "quantity": i['quantidade'],
        "subtotal": parseInt(i['product_purchase_price']) * i['quantidade']
      }
      this.vendaAPI.push(this.itensVenda)
      console.log(this.itensVenda, 'api venda')
      console.log(this.vendaAPI, 'api venda')
      i++;
    })

    this.venda = {
      "quantidadeAlterada": true,
      "client_client_id": 1,
      "total_partial": this.valortotalCompra,
      "amount": 115,
      "discount": 0,
      "type_freight": "correios",
      "value_freight": parseInt(this.frete),
      "number_plots": this.produtosNoCarrinho.length,
      "itens": this.vendaAPI
    };

    console.log(this.precoTotal, 'preço')
    console.log(this.valortotalCompra, 'preço')
    console.log(this.produtosNoCarrinho.length, 'tamanho')
    console.log(this.produtosNoCarrinho)
    console.log(this.compraEfetuada)
    console.log(this.frete)

    this.carrinho();
    this.vendaFeita()
    this.localStorageService.set('addCart', []);
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
        this.resultvenda = result.json();
        console.log(this.resultvenda);
        console.log(result.json());
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
        /* console.log(this.resultVendaCliente) */
      })
      .catch( error => {
        console.log(error);
    });
  }

  /* vendaFeita() {
    this.http.get('http://tzne.kwcraft.com.br/api/venda/listavendacliente/', '1')
      .subscribe(result => {
        this.resultVendaCliente = result.json();
        console.log(this.resultVendaCliente);
        console.log(result.json());
      }, error => {
        console.log(error.json());
      });
  } */

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
  }

  gravarCarrinho() {
    console.log(this.localStorageService.get('detailsNew') as object[])
  }
}

/* this.venda = {
      "quantidadeAlterada": true,
      "client_client_id": 1,
      "total_partial": 230,
      "amount": 115,
      "discount": 0,
      "type_freight": "correios",
      "value_freight": 16,
      "number_plots": 2,
      "itens": [
        {
          "product_product_has_id": 153,
          "product_name": "Camiseta Homem Aranha",
          "unit_price": 57.5,
          "quantity": 1,
          "subtotal": 115
        },
        {
          "product_product_has_id": 178,
          "product_name": "Camiseta Homem Aranha",
          "unit_price": 57.5,
          "quantity": 1,
          "subtotal": 115
        }
      ]
    }; */
