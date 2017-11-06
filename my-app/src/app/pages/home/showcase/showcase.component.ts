import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { HeaderComponent } from '../../../layout/header/header.component';
//service

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {

  private id: any;
  private products: any;
  private boxComprar: boolean = false;
  private teste = [];
  private obj: Object;
  private ListaProdutos: any;
  private ListaDezProdutos: any;
  private resultCEP: any;
  private resultCEPapi: any;

  private cep = {
    'sCepDestino': '04372100',
    'quantidade': '2'
  }

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.routeParams.params.subscribe(params => this.id = params['id'] )
    this.products = this.produtos.getProdutosEmDestaque();
    console.log(this.products, "produtos")

    this.buscarProdutosAPI();
    this.buscarDezProdutosAPI();
    //this.buscarCepAPI();
  }

// API'S
  /* buscarCepAPI(){
   this.resultCEPapi = this.produtos.insertCEP(this.cep)
      .then( result => {
        console.log(result, "API CEP");
        this.resultCEP = result;
        console.log(this.resultCEP['cServico']['Valor'], "CEP result")
      })
      .catch( error => {
        console.log(error);
    });
  } */

  buscarProdutosAPI(){
    this.produtos.buscarProdutos()
        .then( result => {
        console.log(result);
        this.ListaProdutos = result;
      })
      .catch( error => {
        console.log(error);
    });
  }

  buscarDezProdutosAPI(){
    this.produtos.buscarDezProdutos()
        .then( result => {
        console.log(result);
        this.ListaDezProdutos = result;
      })
      .catch( error => {
        console.log(error);
    });
  }
  //Fim das API's

  mostraBoxComprar(event) {
    this.boxComprar = true;
  }

  ocultaBoxComprar() {
    this.boxComprar = false;
  }

  private adicionarSacola(id){
    console.log(this.products.filter(i=> i['id'] == id), "produtos")
    this.produtos.setProdutoCarrinho(this.products.filter(p => p['id'] == id))
  }

  private details( id:number ): void {
    this.router.navigate(['/details/' + id])
  }


}
