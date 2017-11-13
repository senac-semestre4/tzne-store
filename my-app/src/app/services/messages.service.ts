import { Injectable } from '@angular/core';

@Injectable()
export class MensagensService {

  private mensagem: object;

  constructor() { }

  public status ( tipo: string, titulo: string, msg: string ) {
    this.mensagem = { tipo: tipo, titulo: titulo, msg: msg }
  }

  public getStatus () {
    return this.mensagem
  }

  public limparStatus () {
    this.mensagem = null
  }

}
