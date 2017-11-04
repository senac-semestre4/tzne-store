import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  private titulo = "Minha Conta";
  private menuAtivo = "Minha Conta";
  private menuClose : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setTitulo(titulo){
    this.titulo = titulo;
  }

  menuClienteClose(){
    var menu = document.querySelector("#menu_cliente");
    menu.classList.remove("in");
    this.fechaMenu();
  }


  fechaMenu(){
    this.menuClose = !this.menuClose;
  }


}
