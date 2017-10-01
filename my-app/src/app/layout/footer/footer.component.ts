import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  endereco : string = "Rua das flores, 45 - jd. Rosas - São Paulo/SP";
  cep : string = "04567-890";
  cnpj : string = "49.345.385/0001-01";
  constructor() { }

  ngOnInit() {
  }

}
