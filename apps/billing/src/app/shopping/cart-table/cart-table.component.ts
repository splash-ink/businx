import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@businx/billing/core/cart.service';
import { CartItem } from '@businx/data-models';
import { Observable } from 'rxjs';

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

  docs: CartItem[] = [];
  constructor(private cs: CartService) { }

  remove(obj: CartItem) {
    this.cs.remove(obj);
  }

  ngOnInit() {
    this.docs = this.cs.items$;
  }

}
