import { ActivatedRoute, Router } from '@angular/router';
import { Component, trigger, state, style, transition, animate, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit /* OnChanges */{

  @Input() totalCartItens: any;

  private toggleMenu: boolean = false;
  private quantidadeEmCarrinho: number;
  private sair$: boolean = true;

  constructor(
    private routeParams: ActivatedRoute,
    private produtos: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sair$ = true;
    this.quantidadeEmCarrinho = this.produtos.getProdutoCarrinho().length;
    console.log(this.quantidadeEmCarrinho, "Quantidade");
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes.totalCartItens.currentValue);
    this.quantidadeEmCarrinho = changes.totalCartItens.currentValue
  } */

  menuToggle(){
    this.toggleMenu = !this.toggleMenu;
  }

  menuClose(){
    this.toggleMenu = false;
  }

  private cadastrar( id ): void {
    this.router.navigate(['/cadastre/' + id])
  }

  private minhaConta(): void {
    this.router.navigate(['/client/minha-conta/'])
  }

  private meusPedidos(): void {
    this.router.navigate(['/client/meus-pedidos/'])
  }

  private meuCadastro(): void {
    this.router.navigate(['/client/meu-acesso/'])
  }

  private sair(): void {
    this.sair$ = false;
    console.log("aqui")
  }

  private login(): void {
    this.router.navigate(['/login'])
  }

}
