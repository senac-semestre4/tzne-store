import {Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor() { }

  toggleMenu: boolean = false;

  menuToggle(){
    this.toggleMenu = !this.toggleMenu;
  }

}
