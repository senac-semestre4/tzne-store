import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private produtosEmDestaque = [
    {
      "id" : 1,
      "nome" : "Camiseta Homem-Aranha",
      "imagem" : "././assets/images/produtos/1.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 59.41,
      "valorAntigo" : 69.90,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    },
    {
      "id" : 2,
      "nome" : "Camiseta Capitão América",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 69.90,
      "valorAntigo" : 69.90,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 3,
      "nome" : "Camiseta manga longa Batman",
      "imagem" : "././assets/images/produtos/3.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 100.00,
      "valorAntigo" : 89.00,
      "porcentagemDesconto" : 11,
      "emDestaque" : true
    },
    {
      "id" : 4,
      "nome" : "Camiseta Super-Homem",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 65.00,
      "valorAntigo" : 56.52,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    }
  ]

  private produtosVitrine = [
    {
      "id" : 5,
      "nome" : "Camiseta Feminina Capitão América",
      "imagem" : "././assets/images/produtos/5.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 59.41,
      "valorAntigo" : 69.90,
      "porcentagemDesconto" : 15,
      "emDestaque" : false
    },
    {
      "id" : 6,
      "nome" : "Camiseta Mulher Maravilha",
      "imagem" : "././assets/images/produtos/6.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 69.90,
      "valorAntigo" : 69.90,
      "porcentagemDesconto" : 0,
      "emDestaque" : false
    },
    {
      "id" : 7,
      "nome" : "Camiseta Feminina Super-Homem",
      "imagem" : "././assets/images/produtos/7.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 100.00,
      "valorAntigo" : 89.00,
      "porcentagemDesconto" : 11,
      "emDestaque" : false
    },
    {
      "id" : 8,
      "nome" : "Camiseta Thundercats",
      "imagem" : "././assets/images/produtos/8.jpg",
      "descricao" : "",
      "especificacao" : "",
      "valorAtual" : 65.00,
      "valorAntigo" : 56.52,
      "porcentagemDesconto" : 15,
      "emDestaque" : false
    }
  ]


  getProdutosEmDestaque(){
    return this.getProdutosEmDestaque;
  }
}
