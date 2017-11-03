import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  private titulo = "Minha Conta";
  constructor() { }

  ngOnInit() {
  }

  setTitulo(titulo){
    this.titulo = titulo;
  }

}
