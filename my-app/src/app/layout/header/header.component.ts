import { ActivatedRoute, Router } from '@angular/router';
import { Component, trigger, state, style, transition, animate, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  @Input() totalCartItems: number;

  private toggleMenu: boolean = false;
  private quantidadeEmCarrinho: number;

  constructor(
    private routeParams: ActivatedRoute,
    private produtos: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quantidadeEmCarrinho = this.produtos.getProdutoCarrinho().length
    console.log(this.quantidadeEmCarrinho, "Quantidade")
  }

  menuToggle(){
    this.toggleMenu = !this.toggleMenu;
  }

  menuClose(){
    this.toggleMenu = false;
  }

  private cadastrar( id ): void {
    console.log(id)
    this.router.navigate(['/cadastre/' + id])
  }
  private login(): void {
    this.router.navigate(['/login'])
  }


}
