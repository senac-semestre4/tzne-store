import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { HeaderComponent } from '../../../layout/header/header.component';
import { MensagensService } from '../../../services/messages.service';
import { Message } from 'primeng/primeng';
import { URLSearchParams, Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { AfterViewChecked } from '@angular/core';

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
  private resultInsert: any;

  public msgs: Message[] = [];

  constructor(
    private produtos: ProductService,
    private msg: MensagensService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private http: Http,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    console.log('aqui')
    //this.id = this.routeParams.params.subscribe(params => this.id = params['id'] )

    //this.products = this.produtos.getProdutosEmDestaque();
    //console.log(this.products, "produtos");
    this.id = this.produtos.retornarId();
    this.buscarProdutosAPI();
    this.router.navigate(['home']);
    //this.buscarDezProdutosAPI();
  }

   /*  ngAfterViewChecked(): void {
    this.id = this.produtos.retornarId();
    this.buscarProdutosAPI()
  }
 */

  initMsgs(){
    let status = this.msg.getStatus();
    if ( status != null ) this.alertarStatus( status['tipo'], status['titulo'], status['msg'] );
    this.msg.limparStatus();
  }

  private alertarStatus( tipo: string, titulo: string, msg: string ) {
    this.msgs = [];
    this.msgs.push( { severity: tipo, summary: titulo, detail: msg } );
  }

  private limparStatus() {
    this.msgs = [];
  }

  buscarProdutosAPI(){
    this.produtos.buscarProdutos()
        .then( result => {
        console.log(result);
        this.ListaProdutos = result.filter(i => i['product_status'] != 0);
        if(this.id != 0){
          this.ListaProdutos = this.ListaProdutos.filter(i => i['departaments_departament_id'] == this.id);
        }
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

  insertCart() {
    let data = new URLSearchParams();
    /* data.append('sCepDestino', this.sCepDestino);
    data.append('quantidade', this.quantidade); */
    this.http.post('http://tzne.kwcraft.com.br/api/carrinho/addprodcarrinho/1/2/2/2', data)
      .subscribe(result => {
        console.log(result)
        this.resultInsert = result.json();
      }, error => {
        console.log(error.json());
      });
  }
  //Fim das API's

  mostraBoxComprar(event) {
    this.boxComprar = true;
  }

  ocultaBoxComprar() {
    this.boxComprar = false;
  }
// sem local
  /* private adicionarSacola(id){
    console.log(this.ListaProdutos.filter(i=> i['product_id'] == id), "produtos");
    this.ListaProdutos.map(i=> {
      if(i[ 'product_id' ] == id){
        if(i[ 'quantidade' ] == null ){
          i[ 'quantidade' ] = 1;
        } else {
          i[ 'quantidade' ]++;
        }
      }
      });
    console.log(this.ListaProdutos.filter(i=> i['product_id'] == id), "produtos");
    this.produtos.setProdutoCarrinho(this.ListaProdutos.filter(p => p['product_id'] == id));
    this.alertarStatus( 'success', 'Adicionado!', 'Camiseta adicionada na sacola.' );
  } */

  private adicionarSacola(id){
    console.log(this.ListaProdutos.filter(i=> i['product_id'] == id), "produtos");
     this.ListaProdutos.map(i=> {
      if(i[ 'product_id' ] == id){
        if(i[ 'quantidade' ] == null ){
          i[ 'quantidade' ] = 1;
        } else {
          i[ 'quantidade' ]++;
        }
      }
      });
    this.produtos.setProdutoCarrinho(this.ListaProdutos.filter(p => p['product_id'] == id));
    this.alertarStatus( 'success', 'Adicionado!', 'Camiseta adicionada na sacola.' );
  }

  private details( id ): void {
    this.router.navigate(['/details/' + id]);
  }


}
