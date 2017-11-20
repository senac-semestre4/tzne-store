/* import { HttpParams } from '@angular/common/http'; */
import {RequestOptions, Headers,  Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ProductService {

  //private headers = new Headers({ 'Access-Control-Allow-Origin': true });
  private headers = new Headers({'Content-Type': 'application/json'});
  private valorFrete: any;
  private verificarFrete = false;
  private verificarPagamento: boolean = false;
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
      "emDestaque" : true,
      'quantidade': 1
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
      "emDestaque" : true,
      'quantidade': 1
    },
    {
      "id" : 3,
      "nome" : "Camiseta manga longa Batman",
      "imagem" : "././assets/images/produtos/3.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 89.00,
      "valorAntigo" : 89.00,
      "porcentagemDesconto" : 11,
      "emDestaque" : true,
      'quantidade': 1
    },
    {
      "id" : 4,
      "nome" : "Camiseta Super-Homem",
      "imagem" : "././assets/images/produtos/2.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 56.00,
      "valorAntigo" : 56.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true,
      'quantidade': 1
    },
    {
      "id" : 5,
      "nome" : "Camiseta Capitão América Feminina",
      "imagem" : "././assets/images/produtos/5.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 59.00,
      "valorAntigo" : 59.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true,
      'quantidade': 1
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
      "emDestaque" : true,
      'quantidade': 1
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
      "emDestaque" : true,
      'quantidade': 1
    },
    {
      "id" : 8,
      "nome" : "Camiseta Feminina Thundercats",
      "imagem" : "././assets/images/produtos/8.jpg",
      "descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "especificacao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat quis quam at tempus. Duis mattis mauris id tellus lacinia auctor. Suspendisse vulp",
      "valorAtual" : 65.00,
      "valorAntigo" : 65.00,
      "porcentagemDesconto" : 15,
      "emDestaque" : true,
      'quantidade': 1
    }
  ];

  constructor(
    private http: Http,
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ){
    if(this.localStorageService.get('addCart') == null){
       this.localStorageService.set('addCart', []);
    }
  }


  public getProdutosEmDestaque(){
    return this.produtosEmDestaque;
  }
  public getProduto(id){
    return this.produtosEmDestaque.filter(i => i['id'] == id);
  }

  /* public setProdutoCarrinho(produto: object){
    console.log(produto, "parametro do serviço")
    for(let i = 0; i < this.produtosCarrinho.length; i++){
      if(this.produtosCarrinho[i]['id'] == produto[0]['id']){
        this.produtosCarrinho[i]['valorAtual'] += parseInt(produto[0]['valorAntigo']);
        this.produtosCarrinho[i]['quantidade'] ++;
        return
      }
    }
    this.produtosCarrinho.push(produto[0]);
    console.log(this.produtosCarrinho, "produto no carrinho")
  } */

  /* public getProdutoCarrinho(){
    return this.produtosCarrinho
  } */

  public setValorFrete(valor, boolean){
    this.valorFrete = valor;
    this.verificarFrete = boolean;
  }

  public getValorFrete(){
    return this.valorFrete;
  }

  public getverificarFrete(){
    return this.verificarFrete;
  }

  public setPagamento(pagamento){
    this.verificarPagamento = pagamento;
  }
  public getPagamento(){
    return this.verificarPagamento;
  }


  // Implementação de API's funcionais
    /* public insertCEP( obj ) {
    console.log(obj)
    return this.http.post( this.apiService.getUrl() + 'api/frete/calculafrete', obj)
              .subscribe(result => {
                console.log(result.json())
                result.json()
              }, error => {
                  console.log(error.json());
              });
  } */

  //OK
  /* public insertCEP( obj ): Promise<{}> {
    console.log(obj)
    return this.http.post( this.apiService.getUrl() + 'api/frete/calculafrete', JSON.stringify( obj )/* , {headers: this.headers} * ) /* api/frete/calculafrete */ /* JSON.stringify( obj ) *
               .toPromise()
               .then( response => response.json() )
               .catch(this.handleError);
  } */

   public buscarDezProdutos() {
    return this.http.get( this.apiService.getUrl() + 'api/produtos/listarprodutos/10/10')
                  .toPromise()
                  .then( response => this.produtosAPI = response.json() )
                  .catch(this.handleError);
  }

   public buscarProdutos() {
    return this.http.get( this.apiService.getUrl() + 'api/produtos/listarprodutos')
                  .toPromise()
                  .then( response => response.json() )
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //add produto sem local
   /* public setProdutoCarrinho(produto: object){
    console.log(produto, "parametro do serviço")
    for(let i = 0; i < this.produtosCarrinho.length; i++){
      if(this.produtosCarrinho[i]['product_id'] == produto[0]['product_id']){
        this.produtosCarrinho[i]['product_price_sale'] += parseInt(produto[0]['product_price_sale']);
        /* this.produtosCarrinho[i]['quantidade'] ++; *
        return
      }
    }
    this.produtosCarrinho.push(produto[0])[0];
    console.log(this.produtosCarrinho, "produto no carrinho");
  }

  //get sem local storage
   public getProdutoCarrinho(){
    return this.produtosCarrinho
  } */


  //add com local storage
   public setProdutoCarrinho(produto: object){
    console.log(produto, "parametro do serviço")
    this.produtosCarrinho = this.localStorageService.get('addCart') as any[];
    for(let i = 0; i < this.produtosCarrinho.length; i++){
      if(this.produtosCarrinho[i]['product_id'] == produto[0]['product_id']){
        this.produtosCarrinho[i]['quantidade'] ++;
        this.localStorageService.set('addCart', this.produtosCarrinho);
        return
      }
    }
    this.produtosCarrinho = this.localStorageService.get('addCart') as any[];
    this.produtosCarrinho.push(produto[0])[0];
    this.localStorageService.set('addCart', this.produtosCarrinho);
    console.log(this.produtosCarrinho, "produto no carrinho");
    console.log(this.localStorageService.get('addCart'), "produto no carrinho TESTE");
  }

  public getProdutoCarrinho(){
    this.produtosCarrinho = this.localStorageService.get('addCart') as object[];
    console.log(this.localStorageService.get('addCart') as object[], 'teste')
    return this.localStorageService.get('addCart') as object[];
    //return this.produtosCarrinho;
  }

}
