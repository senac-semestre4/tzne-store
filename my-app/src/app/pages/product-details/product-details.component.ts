import { Component, ViewChild, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  private products;
  //private id: number;
  private nome: string;
  private imagem: string;
  private descricao: string;
  private especificacao: string;
  private valorAtual: number;
  private valorAntigo: number;
  private porcentagemDesconto: number;
  private produtoEmDestaque : boolean;

  private id: any;
  private prod: object;
  private api: any;

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router
  ){
    this.descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sin";
    this.especificacao = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy";
  }

  ngOnInit(): void {
    this.api = this.routeParams.params.subscribe(params => {
        this.id = params['id'];
    });
    this.prod = this.produtos.getProduto( this.id );
    console.log(this.prod);
  }
}
