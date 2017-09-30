import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

import { ProductService } from "../services/product.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
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

  constructor(serviceProduct : ProductService) {
    this.products = serviceProduct.getProdutosEmDestaque();
    //this.descricao = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
    //this.especificacao = "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ";
   }
}
