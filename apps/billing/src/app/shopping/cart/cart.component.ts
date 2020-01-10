import { Component, OnInit } from '@angular/core';
import { CartService } from '@businx/billing/core/cart.service';
import { CartItem } from '@businx/data-models';

@Component({
  selector: 'businx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  timestamp = Date.now();
  dueDate: Date = new Date();

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.dueDate
    .setDate(this.dueDate.getDate() + 14);
  }

}

