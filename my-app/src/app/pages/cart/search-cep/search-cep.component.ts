import { Component, OnInit, animate } from '@angular/core';
/* import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms'; */

import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.scss']
})
export class SearchCepComponent implements OnInit {

  private resultCEP: any = {
    'cServico':{
      'Valor': ''
    }
  };
  private cep = {
    'sCepDestino': '',
    'quantidade': '2'
  }

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {  }

  buscarCepAPI(){
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
    });


  }
}
