import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
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


  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.routeParams.params.subscribe(params => this.id = params['id'] )
    this.products = this.produtos.getProdutosEmDestaque();
    console.log(this.products, "produtos")
  }


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
