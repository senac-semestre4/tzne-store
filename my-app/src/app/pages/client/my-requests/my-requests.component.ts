import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from '../../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  aux: any = '';
  resultPedidosCliente: any;


  private getCliente: any = [];
  private resultVendaCliente: any[] = [];
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
    "subtotal": null,
    "totall": null
  }
  private localentrega = {
    "nome": null,
    "rua": "",
    "local": null,
    "estado": null,
    "cep": null,
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
    private router: Router
  ) { }

  // tirar o post daqui e colocar no botão do finalizar compra

  ngOnInit() {
    /* this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + parseInt(i['product_purchase_price']) * i['quantidade']);
    this.produtosNoCarrinho = this.produtos.getProdutoCarrinho();
    this.frete = this.produtos.getValorFrete();
    console.log(this.valorTotal, this.frete)
    this.valortotalCompra = (this.valorTotal + parseInt(this.frete));
    this.compraEfetuada = this.produtos.getPagamento(); */

    this.listaClientes();
    this.pedidoFeito();
    console.log(this.localStorageService.get('cliente'), 'log')
    this.getCliente.filter(i=> {

    })
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

  vendaFeita(id) {
    console.log(id)
    this.produtos.getVenda(id)
      .then(result => {
        console.log(result);
        this.resultVendaCliente = result;
        console.log(this.resultVendaCliente);
      })
      .catch(error => {
        console.log(error);
      });
  }

  pedidoFeito() {
    this.produtos.getVendaPedidos()
      .then(result => {
        console.log(result);
        if(result['logado'] == false){
          this.router.navigate(['/login/0'])
        }
        this.resultPedidosCliente = result.filter(i => i['venda']['client_client_id'] == this.aux[0]['client_id']);
        console.log(this.resultPedidosCliente);
      })
      .catch(error => {
        console.log(error);
      });
  }

  listaClientes() {
    this.produtos.listarClientes()
      .then(result => {
        console.log(result);
        result.filter(i => {
          if(i=> i['client_email'] == this.localStorageService.get('cliente')['userName']){
          this.localentrega = {
            "nome": i['client_name'],
            "rua": i['client_adress_logradouro'],
            "local": i['client_adress_district'],
            "estado": i['client_adress_city'],
            "cep": i['client_adress_cep'],
          }
        }
        })
        this.getCliente = result;
        console.log(this.getCliente);
        this.aux = result.filter(i=> i['client_email'] == this.localStorageService.get('cliente')['userName']);
        this.vendaFeita(this.aux[0]['client_id']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  vendaFeitaById(id) {
    this.vendaAPI = [];
    let total = 0;
    this.produtos.getVendaById(id)
      .then(result => {
        console.log(result);
        result.filter(i => {
          total =+ parseInt(i['subtotal']) * parseInt(i['quantity']);
          this.itensVenda = {
            "product_product_has_id": i['product_product_has_id'],
            "product_name": "",
            "unit_price": i['subtotal'],
            "quantity": i['quantity'],
            "subtotal": parseInt(i['subtotal']) * parseInt(i['quantity']),
            "totall": total
          }
          this.vendaAPI.push(this.itensVenda);
        })
        console.log('tenaskdajsha', this.itensVenda, this.vendaAPI)
      })
      .catch(error => {
        console.log(error);
      });
  }

  public openModal(template: TemplateRef<any>, id) {
    this.vendaFeitaById(id);
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, { class: 'gray modal-lg' }));
  }

  gravarCarrinho() {
    console.log(this.localStorageService.get('detailsNew') as object[])
  }
}
