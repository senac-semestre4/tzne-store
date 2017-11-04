/**
 * Controller de serviços para as apis do Back-End
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {


  private url = 'http://tzne.kwcraft.com.br/';

  constructor( ) { }

  getUrl(){
    return this.url;
  }

}
