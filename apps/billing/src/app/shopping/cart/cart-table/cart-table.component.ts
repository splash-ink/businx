import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from '../cart.model';
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

  docs: ICartItem[] = [];
  constructor(private cs: CartService) { }

  remove(obj: ICartItem) {
    this.cs.remove(obj);
  }

  ngOnInit() {
    this.docs = this.cs.items$;
  }

}
