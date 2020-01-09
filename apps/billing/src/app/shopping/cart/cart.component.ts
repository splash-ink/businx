import { Component, OnInit } from '@angular/core';
import { CartService } from '@businx/billing/core/cart.service';
import { CartItem } from '@businx/data-models';

@Component({
  selector: 'businx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  
  constructor(private cs: CartService) { }

  ngOnInit() {
  }

}
