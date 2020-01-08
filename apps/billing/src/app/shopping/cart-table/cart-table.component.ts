import { Component, OnInit } from '@angular/core';
import { CartService } from '@businx/billing/core/cart.service';
import { Observable, of } from 'rxjs';
import { CartItem } from '@businx/data-models';

@Component({
  selector: 'businx-cart-table',
  templateUrl: './cart-table.component.html',
  styles: []
})
export class CartTableComponent implements OnInit {

  docs: CartItem[] = [];
  constructor(private cs: CartService) { }

  ngOnInit() {
    this.docs = this.cs.items$;
  }

}
