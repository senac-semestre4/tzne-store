import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  private formaEntrega : string = "";
  constructor() { }

  ngOnInit() {
  }

  selecionaEntrega(event){
    if(event.target.tagName == 'A'){
      event.target.childNodes[1].checked = true;
    }else{
      event.target.parentNode.children["0"].checked = true;
    }
  }

}
