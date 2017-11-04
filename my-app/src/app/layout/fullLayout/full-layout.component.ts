/**
 * Controller que gerencia o componente SimpleLayoutComponent.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-full',
  templateUrl: './full-layout.component.html',
})
export class FullLayoutComponent implements OnInit {



  constructor(

  ) { }

  ngOnInit(): void {

  }

}
