import { Component, OnInit, animate } from '@angular/core';
/* import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms'; */

import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { URLSearchParams, Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.scss']
})
export class SearchCepComponent implements OnInit {

  private resultCEP: any = {
    'cServico': {
      'Valor': ''
    }
  };
  /*  private cep = {
     'sCepDestino': '',
     'quantidade': ''
   } */

  private sCepDestino: any = '';
  private quantidade: any = '';
  private error = false

  constructor(
    private http: Http,
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService

  ) { }

  ngOnInit() {
    this.quantidade = this.produtos.getProdutoCarrinho().length;
  }

  //OK usando api do produto service
  /* buscarCepAPI(){
  console.log(this.cep)
  this.produtos.insertCEP(this.cep)
     .then( result => {
       console.log(result, "API CEP");
       this.resultCEP = result;
       console.log(this.resultCEP['cServico']['Valor'], "CEP result");
       this.produtos.setValorFrete(this.resultCEP['cServico']['Valor'], true);
     })
     .catch( error => {
       console.log(error);
   }); */

  //OK sem usar produto service, ja é tudo aqui
  buscarCepAPI() {
    this.error = false;
    let data = new URLSearchParams();
    data.append('sCepDestino', this.sCepDestino);
    data.append('quantidade', this.quantidade);
    if(this.sCepDestino != '' ){
    this.http.post('http://tzne.kwcraft.com.br/api/frete/calculafrete', data)
      .subscribe(result => {
        this.resultCEP = result.json();
        this.produtos.setValorFrete(parseInt(this.resultCEP['cServico']['Valor']), true);
        this.localStorageService.set('cep',this.resultCEP['cServico']['Valor'] )
      }, error => {
        console.log(error.json());
      });
    } else {
      this.error = true;
    }
  }

}
