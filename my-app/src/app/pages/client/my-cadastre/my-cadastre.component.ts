import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cadastre',
  templateUrl: './my-cadastre.component.html',
  styleUrls: ['./my-cadastre.component.scss']
})
export class MyCadastreComponent implements OnInit {

  private cliente = {
    'nome': '',
    'apelido': '',
    'cpf': '',
    'sexo': '',
    'dataNasc': '',
    'telefone': '',
    'celular': '',
    'email': '',
  }

  constructor() { }

  ngOnInit() {
  }

}
