import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(){ }

  private produtosEmDestaque = [
    {
      "id" : 1,
      "nome" : "Camiseta Homem-Aranha",
      "imagem" : "././assets/images/produtos/1.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 2,
      "nome" : "Camiseta Capitão América",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 3,
      "nome" : "Camiseta manga longa Batman",
      "imagem" : "././assets/images/produtos/3.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 89.00,
      "valorAntigo" : 100.00,
      "porcentagemDesconto" : 11,
      "emDestaque" : true
    },
    {
      "id" : 4,
      "nome" : "Camiseta Super-Homem",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 56.00,
      "valorAntigo" : 65.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    },
    {
      "id" : 5,
      "nome" : "Camiseta Capitão América Feminina",
      "imagem" : "././assets/images/produtos/5.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 59.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    },
    {
      "id" : 6,
      "nome" : "Camiseta Flesh Feminina",
      "imagem" : "././assets/images/produtos/6.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 7,
      "nome" : "Camiseta Feminina Super-homem",
      "imagem" : "././assets/images/produtos/7.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 89.00,
      "valorAntigo" : 89.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 8,
      "nome" : "Camiseta Feminina Thundercats",
      "imagem" : "././assets/images/produtos/8.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 65.00,
      "valorAntigo" : 56.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    }
  ];


  public getProdutosEmDestaque(){
    return this.produtosEmDestaque;
  }
}
