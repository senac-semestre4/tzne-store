import { ActivatedRoute, Router } from '@angular/router';
import { Component, trigger, state, style, transition, animate, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Input() totalCartItems: number;


  constructor(
    private routeParams: ActivatedRoute,
    private router: Router
  ) { }


  private toggleMenu: boolean = false;
  private quantidadeEmCarrinho: number;



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
