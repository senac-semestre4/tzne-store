import { Injectable } from '@angular/core';
import { Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { ProductService } from '../services/product.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

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
    console.log(this.localStorageService.get('cliente'), 'activate')
    let flag = []
    flag = this.localStorageService.get('cliente') as object[];
    if (flag.length == 0) {
      console.log('Veificadoooooooo')
      this.router.navigate(['/login/0'])
      return false;
    }
    else {
      this.router.navigate([''])
    }
    return true;
  }


  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    //verificar se o user pode carregar o codigo do modulo
    console.log("CanLoad")
    return this.verificarAcesso();

  }

}
