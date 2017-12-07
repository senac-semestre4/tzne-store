import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from '../../../services/messages.service';
import { Message } from 'primeng/primeng';
import { LocalStorageService } from 'angular-2-local-storage';
import { AlertModule } from 'ngx-bootstrap';
import { Headers, Http } from '@angular/http';

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
  private cliente = {
    'nome': '',
    'userName': '',
    'userKey': ''
  }
  private cliente1 = {
    'username': '',
    'password': ''
  }
  private logado: any;
  private error = false;
  private autenticado = true;

  private getCliente: any[];


  constructor(
    private produtos: ProductService,
    private routeParams: ActivatedRoute,
    private router: Router,
    private msg: MensagensService,
    private localStorageService: LocalStorageService,
    private http: Http
  ) { }

  ngOnInit(): void {
    this.api = this.routeParams.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id == 1) {
      this.alertarStatus('success', 'Sucesso!', 'Sucesso.');
    }

    this.produtos.listarClientes()
      .then(result => {
        console.log(result);
        this.getCliente = result;
        console.log(this.getCliente);
      })
      .catch(error => {
        console.log(error);
      });

    let sessao = this.localStorageService.get('cliente') as object;
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

  private cadastrar(id): void {
    this.router.navigate(['/cadastre/' + id])
  }

  Logar() {
    this.error = false;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', this.cliente.userName);
    urlSearchParams.append('password', this.cliente.userKey);
    let body = urlSearchParams.toString()
    let flag = false;
    this.getCliente.filter(i=> {
      if(i['client_email'] == this.cliente.userName){
        flag = true;
      }
    })
    if (flag && this.cliente.userKey.length > 4) {
      this.http.post('http://tzne.kwcraft.com.br/Services/LoginCliente.php', body, { headers: headers })
        .subscribe(result => {
          console.log(result.json());
          this.logado = result.json();
          this.localStorageService.set('idVenda', this.logado)
          console.log(this.localStorageService.get('idVenda'))
          this.getCliente.filter(i => {
            if (i['client_email'] == this.cliente.userName) {
              this.cliente['nome'] = i['client_name'];
              this.localStorageService.set('cliente', this.cliente);
              this.router.navigate(['']);
            }
          })
        }, error => {
          console.log(error.json());
        });
    } else {
      this.error = true;
    }
  }

  /* Logar() {
   var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
   let urlSearchParams = new URLSearchParams();
   let body = urlSearchParams.toString()
   this.http.post('http://tzne.kwcraft.com.br/Services/LoginCliente.php', this.cliente, { headers: headers })
     .subscribe(result => {
       console.log(result.json());
     }, error => {
       console.log(error.json());
     });
 }*/
}
