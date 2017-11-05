import {RequestOptions, Headers,  Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {

  constructor( private http: Http, private apiService: ApiService ){}
  private headers = new Headers({'Content-Type': 'application/json'});
  //private headers = new Headers({ 'Access-Control-Allow-Origin': true });

  private produtosAPI: any;
  private produtosCarrinho = [];
  private produtosEmDestaque = [
    {
      "id" : 1,
      "nome" : "Camiseta Homem-Aranha",
      "imagem" : "././assets/images/produtos/1.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 2,
      "nome" : "Camiseta Capitão América",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 3,
      "nome" : "Camiseta manga longa Batman",
      "imagem" : "././assets/images/produtos/3.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 89.00,
      "valorAntigo" : 100.00,
      "porcentagemDesconto" : 11,
      "emDestaque" : true
    },
    {
      "id" : 4,
      "nome" : "Camiseta Super-Homem",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 56.00,
      "valorAntigo" : 65.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    },
    {
      "id" : 5,
      "nome" : "Camiseta Capitão América Feminina",
      "imagem" : "././assets/images/produtos/5.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 59.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    },
    {
      "id" : 6,
      "nome" : "Camiseta Flesh Feminina",
      "imagem" : "././assets/images/produtos/6.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 69.00,
      "valorAntigo" : 69.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 7,
      "nome" : "Camiseta Feminina Super-homem",
      "imagem" : "././assets/images/produtos/7.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 89.00,
      "valorAntigo" : 89.00,
      "porcentagemDesconto" : 0,
      "emDestaque" : true
    },
    {
      "id" : 8,
      "nome" : "Camiseta Feminina Thundercats",
      "imagem" : "././assets/images/produtos/8.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 65.00,
      "valorAntigo" : 56.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true
    }
  ];


  public getProdutosEmDestaque(){
    return this.produtosEmDestaque;
  }
  public getProduto(id){
    return this.produtosEmDestaque.filter(i => i['id'] == id);
  }

  public setProdutoCarrinho(produto: object){
    console.log(produto, "parametro do serviço")
    this.produtosCarrinho.push(produto[0]);
    console.log(this.produtosCarrinho, "produto no carrinho")
  }

  public getProdutoCarrinho(){
    return this.produtosCarrinho
  }


  // Implementação de API's

  public insertCEP( obj ): Promise<{}> {
    console.log(obj)
    return this.http.post( this.apiService.getUrl() + 'api/frete/calculafrete', JSON.stringify( obj )/* , {headers: this.headers} */ ) /* api/frete/calculafrete */ /* JSON.stringify( obj ) */
               .toPromise()
               .then( response => response.json() )
               .catch(this.handleError);
  }

   public buscarDezProdutos() {
    return this.http.get( this.apiService.getUrl() + 'api/produtos/listarprodutos/10/10')
                  .toPromise()
                  .then( response => this.produtosAPI = response.json() )
                  .catch(this.handleError);
  }

   public buscarProdutos() {
    return this.http.get( this.apiService.getUrl() + 'api/produtos/listarprodutos')
                  .toPromise()
                  .then( response => this.produtosAPI = response.json() )
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
