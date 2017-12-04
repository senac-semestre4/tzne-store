import { ProductService } from '../../../services/product.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'angular-2-local-storage';
import { Headers, URLSearchParams, Http } from '@angular/http';
import { Message } from 'primeng/primeng';
import { MensagensService } from '../../../services/messages.service';

@Component({
  selector: 'app-my-cadastre-initial',
  templateUrl: './my-cadastre-initial.component.html',
  styleUrls: ['./my-cadastre-initial.component.scss']
})
export class MyCadastreInitialComponent implements OnInit {

  public msgs: Message[] = [];
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
    'client_adress_city': '',
    'client_adress_state': '',
    'client_status': ''
  }

  constructor(
    private produtos: ProductService,
    private modalService: BsModalService,
    private localStorageService: LocalStorageService,
    private http: Http,
    private msg: MensagensService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  inserirCliente() {
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
        console.log(result)
        return true;
      }, error => {
        console.log(error.json());
      });

  }

  initMsgs() {
    let status = this.msg.getStatus();
    if (status != null) this.alertarStatus(status['tipo'], status['titulo'], status['msg']);
    this.msg.limparStatus();
  }

  private alertarStatus(tipo: string, titulo: string, msg: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: msg });
  }

  private limparStatus() {
    this.msgs = [];
  }


  salvar() {
    if (!this.inserirCliente()) {
      this.router.navigate(['/login/1']);
    }
    else {
      this.alertarStatus('error', 'OPS!', 'Algo não deu certo');
    }
  }
}
