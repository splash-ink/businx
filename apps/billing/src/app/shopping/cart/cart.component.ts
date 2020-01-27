import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { ICartItem } from './cart.model';

@Component({
  selector: 'businx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  timestamp = Date.now();
  dueDate: Date = new Date();

  constructor(public cs: CartService, private route: Router) { }

  checkout() {
    this.route.navigate(['/shopping/checkout'])
  }

  onDelete($event: ICartItem) {
    this.cs.unsetCartItem($event);
  }

  onUpdate($event: [ICartItem, number]) {
    const [ item, newVal] = $event;

    this.cs.updateCartItemQty(item, newVal);
  }

  ngOnInit() {
    this.dueDate
    .setDate(this.dueDate.getDate() + 14);
  }

}

