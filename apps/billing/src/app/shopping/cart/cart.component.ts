import { Component, OnInit } from '@angular/core';
import { CartService } from '@businx/billing/core/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'businx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  timestamp = Date.now();
  dueDate: Date = new Date();

  constructor(private cs: CartService, private route: Router) { }

  checkout() {
    this.route.navigate(['/shopping/checkout'])
  }

  ngOnInit() {
    this.dueDate
    .setDate(this.dueDate.getDate() + 14);
  }

}

