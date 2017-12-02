import { ProductService } from '../../../services/product.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, URLSearchParams, Http } from '@angular/http';



@Component({
  selector: 'app-my-cadastre-initial',
  templateUrl: './my-cadastre-initial.component.html',
  styleUrls: ['./my-cadastre-initial.component.scss']
})
export class MyCadastreInitialComponent implements OnInit {

  private resultInsertCli: any;

  private cliente = {
    'client_name': '',
    'client_email': '',
    'client_cpf': '',
    'client_sex': '',
    'client_password': '',
    'client_birthday': '',
    'client_tel': '',
    'client_cel': '',
    'client_direct_mail': '',
    'client_adress_type': '',
    'client_adress_cep': '',
    'client_adress_logradouro': '',
    'client_adress_number': '',
    'client_adress_complements': '',
    'client_adress_district': '',
    'client_adress_city':'',
    'client_adress_state':'',
    'client_status': ''
  }
  /* private cliente = {
    'client_nome': '',
    'client_password': '',
    'client_cpf': '',
    'client_sex': '',
    'client_birthday': '',
    'client_tel': '',
    'client_cel': '',
    'client_email': '',
    'client_adress_cep': '',
    'client_adress_logradouro': '',
    'client_adress_type': '',
    'client_adress_complements': '',
    'client_adress_number': '',
    'client_adress_city': '',
    'client_adress_district': '',
    'client_direct_mail': '',
    'estado': ''
  } */

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService,
    private localStorageService: LocalStorageService,
    private http: Http,
  ) { }

  ngOnInit() {
  }



  inserirCliente() {
    /* let data = new URLSearchParams();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    data.append('client_name', 'TESTEeeeeeewada');
    data.append('client_password', '123456');
    data.append('client_cpf', '123465');
    data.append('client_sex', '1');
    data.append('client_birthday', '2017-10-11 00:00:00');
    data.append('client_tel', '123456');
    data.append('client_cel', '123456');
    data.append('client_email', 'TSETE@TESTE22223');
    data.append('client_adress_cep', '12345687');
    data.append('client_adress_logradouro', 'teste');
    data.append('client_adress_type', 'teste');
    data.append('client_adress_complements', 'teste');
    data.append('client_adress_number', '123456');
    data.append('client_adress_district', 'teste');
    data.append('client_direct_mail', '0');
    data.append('client_adress_city', 'teste');
    data.append('client_adress_state', 'teste'); */
    let data = new URLSearchParams();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    data.append('client_name', this.cliente.client_name);
    data.append('client_password', this.cliente.client_password);
    data.append('client_cpf', this.cliente.client_cpf);
    data.append('client_sex', this.cliente.client_sex);
    data.append('client_birthday', this.cliente.client_birthday);
    data.append('client_tel', this.cliente.client_tel);
    data.append('client_cel', this.cliente.client_cel);
    data.append('client_email', this.cliente.client_email);
    data.append('client_adress_cep', this.cliente.client_adress_cep);
    data.append('client_adress_logradouro', this.cliente.client_adress_logradouro);
    data.append('client_adress_type', this.cliente.client_adress_type);
    data.append('client_adress_complements', this.cliente.client_adress_complements);
    data.append('client_adress_number', this.cliente.client_adress_number);
    data.append('client_adress_district', this.cliente.client_adress_district);
    data.append('client_direct_mail', '0');
    data.append('client_adress_city', this.cliente.client_adress_city);
    data.append('client_adress_state', '1');

    this.http.post('http://tzne.kwcraft.com.br/View/TestesViews/ViewCliente/inserecliente.php', data, { headers: headers })
      .subscribe(result => {
        //this.resultInsertCli = result.json();
        console.log(result)
        //console.log(result.json())
      }, error => {
        console.log(error.json());
      });

   /*  this.http.post('http://tzne.kwcraft.com.br/View/TestesViews/ViewCliente/inserecliente.php', data)
      .subscribe(result => {
        this.resultInsertCli = result.json();
        console.log(result.json())
      }, error => {
        console.log(error.json());
      }); */
  }

  salvar(){
    console.log(this.cliente);
    this.inserirCliente();
  }
}
