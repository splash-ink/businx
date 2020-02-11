import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { ICartItem } from './cart.model';

export const LocalKeys = [
  'CART_SHIP',
  'CART_DISCOUNT'
];

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

  clearCartData() {
    this.cs.unsetCartItems();
    this.syncToLocalStorage(LocalKeys[0], 0);
    this.syncToLocalStorage(LocalKeys[1], 0);
  }

  onDelete($event: ICartItem) {
    this.cs.unsetCartItem($event);
  }

  onUpdate($event: [ICartItem, number]) {
    const [ item, newVal] = $event;

    this.cs.updateCartItemQty(item, newVal);
  }

  syncToLocalStorage(key: string, $event: number) {
    if (typeof $event !== 'number' || undefined)
      return;

    this.cs.setToLocalStorage(key, $event);
  }

  getShip() {
    return this.cs.getFromLocalStorage(LocalKeys[0], 0);
  }

  getDiscount() {
    return this.cs.getFromLocalStorage(LocalKeys[1], 0);
  }

  getTax(): number {
    return this.cs.getTax();
  }

  getSubtotal(): number {
    return this.cs.getSubtotal();
  }

  getTotal(): number {
    return this.cs.getTotal(this.getShip(), this.getDiscount());
  }

  ngOnInit() {
    this.dueDate
    .setDate(this.dueDate.getDate() + 14);
  }

}

