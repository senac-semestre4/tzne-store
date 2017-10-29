import {ActivatedRoute} from '@angular/router';
import {Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(route: ActivatedRoute) { }

  toggleMenu: boolean = false;

  menuToggle(){
    this.toggleMenu = !this.toggleMenu;
  }

  menuClose(){
    this.toggleMenu = false;
  }

}
