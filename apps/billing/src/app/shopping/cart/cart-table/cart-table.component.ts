import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'businx-cart-table',
  templateUrl: './cart-table.component.html',
  styles: [`
    .w-80 {
      width: 80px !important;
      }
  `]
})
export class CartTableComponent implements OnInit {

  constructor(public cs: CartService) { }

  ngOnInit() {
  }

}
