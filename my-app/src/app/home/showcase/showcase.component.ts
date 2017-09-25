import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent{
  
  boxComprar : boolean = false;

  mostraBoxComprar(event){
    this.boxComprar = true;
  }

  ocultaBoxComprar(){
    this.boxComprar = false;
  }
}
