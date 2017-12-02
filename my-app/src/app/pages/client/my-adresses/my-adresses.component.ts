import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-adresses',
  templateUrl: './my-adresses.component.html',
  styleUrls: ['./my-adresses.component.scss']
})
export class MyAdressesComponent implements OnInit {

  private cliente = {
    'cep': '',
    'Logradouro': '',
    'numero': '',
    'estado': '',
    'bairro': '',
    'cidade': '',
  }


  constructor() { }

  ngOnInit() {
  }

  salvarCliente(){
    console.log('aqui');
  }

}
