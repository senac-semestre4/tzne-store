import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from '../../../services/messages.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public msgs: Message[] = [];
  private resultInsertCli: any;
  private id: any;
  private api: any;

  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private msg: MensagensService,

  ) { }

  ngOnInit(): void {
    this.api = this.routeParams.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id == 1) {
      this.alertarStatus('success', 'Sucesso!', 'Sucesso.');
    }
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

}
