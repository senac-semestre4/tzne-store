import { Injectable } from '@angular/core';
import { Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { ProductService } from '../services/product.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthGuardEntrar implements CanActivate, CanLoad {

  constructor(
    private localStorageService: LocalStorageService,
    private loginAutenticado: ProductService,
    private router: Router,

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    console.log(this.localStorageService.get('cliente'), 'activate')
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    console.log(this.localStorageService.get('cliente'), 'activate entrar')
    let flag = []
    flag = this.localStorageService.get('cliente') as object[];
    if (flag.length == 0) {
      return true
    } else {
      this.router.navigate(['']);
    }
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    //verificar se o user pode carregar o codigo do modulo
    console.log("CanLoad Entrar")
    return this.verificarAcesso();

  }

}
