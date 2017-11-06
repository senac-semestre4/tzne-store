import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from '../../../services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';

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

  private compraEfetuada: any;
  private date: Date;
  private formaEntrega : string = "";
  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;
  private frete: any;
  private valortotalCompra: number = 0;

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
    this.compraEfetuada = this.produtos.getPagamento();
    this.date = new Date();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg'}));
  }
}
