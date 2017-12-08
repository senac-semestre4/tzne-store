import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from '../../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-cadastre',
  templateUrl: './my-cadastre.component.html',
  styleUrls: ['./my-cadastre.component.scss']
})
export class MyCadastreComponent implements OnInit {

  private cliente = {
    'nome': '',
    'apelido': '',
    'cpf': '',
    'sexo': '',
    'dataNasc': '',
    'telefone': '',
    'celular': '',
    'email': '',
  }
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

  ngOnInit() {
  }


  listaClientes() {
    /* this.produtos.listarClientes()
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
        }) */
        /* this.getCliente = result;
        console.log(this.getCliente);
        this.aux = result.filter(i=> i['client_email'] == this.localStorageService.get('cliente')['userName']);
        this.vendaFeita(this.aux[0]['client_id']); */
      /* })
      .catch(error => {
        console.log(error);
      }); */
  }
}
