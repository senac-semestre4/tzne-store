import {Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor() { }

  navToggle: boolean = false;
  
  toggleNav(){
    this.navToggle = !this.navToggle;
  }

}
