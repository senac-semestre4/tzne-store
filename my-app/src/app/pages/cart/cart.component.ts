import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
	selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']

})

export class CartComponent implements OnInit {

  totalCartValue$: number;
  totalCartItems$: number;
  /* totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>; */

	ngOnInit() {
    this.totalCartValue$ = 1;
    this.totalCartItems$ = 1;
  }
}
