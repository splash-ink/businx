import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'businx-summary',
  templateUrl: './summary.component.html',
  styles: []
})
export class SummaryComponent implements OnInit {

  ship = this.cs.getFromLocalStorage('CART_SHIP', 0);
  discount = this.cs.getFromLocalStorage('CART_DISCOUNT', 0);;

  constructor(public cs: CartService) { }

  checkDiscountLimit() {
    if (this.discount > 30)
      this.discount = 30

    this.cs.setToLocalStorage('CART_DISCOUNT', this.discount);
  }

  ngOnInit() {
  }

}
