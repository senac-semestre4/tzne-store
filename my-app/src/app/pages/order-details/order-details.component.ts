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

  private formaEntrega : string = "";
  private precoTotal: any
  private valorTotal: number = 0;
  private parcelas: number = 0;
  public modalRef: BsModalRef;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.precoTotal = this.produtos.getProdutoCarrinho();
    this.precoTotal.map(i => this.valorTotal = this.valorTotal + i['valorAtual']);
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

}
