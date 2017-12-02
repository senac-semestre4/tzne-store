import { Component, OnInit, Directive } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MensagensService } from '../../../services/messages.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {

  private chamado;
  public msgs: Message[] = [];

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  constructor(
    private http: Http,
    private msg: MensagensService,
  ) { 
    this.limparChamado();
  }

  ngOnInit() {
  }

  enviar(){
    let resposta = {};
    if (this.verificaPreenchimento()) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let data = new URLSearchParams();
        data.append('txtnome', this.chamado.nome);
        data.append('txtemail', this.chamado.email);
        data.append('txttel', this.chamado.telefone);
        data.append('txtassunto', this.chamado.assunto);
        data.append('txtmsg', this.chamado.mensagem);
        let body = data.toString();
        this.http.post('http://tzne.kwcraft.com.br/contato', body, { headers: headers })
        .subscribe(response => {
          console.log(response);
          this.alertarStatus( 'success', 'Sucesso!', 'Seu chamado foi enviado com sucesso!' );
          this.limparChamado();
        }, error => {
          this.alertarStatus( 'error', 'OPS!', 'Erro ao enviar chamado!' );
        });
    }else{
      this.alertarStatus( 'error', 'OPS!', 'Campos marcados em (*) são obrigatórios!' );
    }
  }

  limparChamado(){
    this.chamado = {
      nome : "",
      email : "",
      telefone : "",
      assunto : "",
      mensagem : ""
    };
  }

  verificaPreenchimento(){
    return (
      this.chamado.nome.trim() != "" &&
      this.chamado.email.trim() != "" &&
      this.chamado.telefone.trim() != "" &&
      this.chamado.assunto.trim() != "" &&
      this.chamado.mensagem.trim() != ""
    );
  }

  initMsgs(){
    let status = this.msg.getStatus();
    if ( status != null ) this.alertarStatus( status['tipo'], status['titulo'], status['msg'] );
    this.msg.limparStatus();
  }

  private alertarStatus( tipo: string, titulo: string, msg: string ) {
    this.msgs = [];
    this.msgs.push( { severity: tipo, summary: titulo, detail: msg } );
  }

  private limparStatus() {
    this.msgs = [];
  }

}
