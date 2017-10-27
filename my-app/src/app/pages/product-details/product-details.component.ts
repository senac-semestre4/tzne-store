import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent{
  private products;
  private id: number;
  private nome: string;
  private imagem: string;
  private descricao: string;
  private especificacao: string;
  private valorAtual: number;
  private valorAntigo: number;
  private porcentagemDesconto: number;
  private produtoEmDestaque : boolean;

  constructor(){
    this.descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sin";
    this.especificacao = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy";

  }
}
