import { Component, OnInit } from '@angular/core';

import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  providers: [ProductService]
})
export class ShowcaseComponent{
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
    console.log("aqui",this.products);
    //this.descricao = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
    //this.especificacao = "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ";
   }
  
  boxComprar : boolean = false;

  mostraBoxComprar(event){
    this.boxComprar = true;
  }

  ocultaBoxComprar(){
    this.boxComprar = false;
  }

  getProdutoEmDestaque(){
    return [{
      "id" : 1,
      "nome" : "Camiseta Homem-Aranha",
      "imagem" : "././assets/images/produtos/1.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 59.41,
      "valorAntigo" : 69.90,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    }]
  }
}
