import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice.model';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Contact } from '../../contacts/contact.model';
import { OrderItem } from '@businx/data-models';

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
  ref = 'companies/splashink/invoices';

  constructor(
    private route: Router,
    public readonly cs: CartService,
    private readonly dataService: FirestoreDataService
  ) { }

  async checkout() {
    const doc = await this.invoice();
    if (!!doc) {
      this.route.navigate([`/shopping/checkout`, doc.id]);
    }

    return;
  }

  isReady(): boolean {
    const items: OrderItem [] = this.cs.getCartItems();
    const buyer: Contact = this.cs.getBuyer();

    if(items.length > 0 && buyer !== null) {
      return true;
    }

    return false;
  }

  async invoice() {
    const items: OrderItem [] = this.cs.getCartItems();
    const buyer: Contact = this.cs.getBuyer();
    const ship = this.getShip();
    const discounts = this.getDiscount();
    const subtotal = this.getSubtotal();
    const total = this.getTotal();
    const tax = this.getTax();

    if (this.isReady) {
      try {
        const invoice = await this.dataService.create<Invoice>(this.ref, {
          buyer,
          items,
          discounts,
          ship,
          tax,
          subtotal,
          total,
          issue_date: this.timestamp,
          due_date: this.dueDate
        });

        return invoice;

      } catch (error) {
        console.log(error);
      }
    }
  }

  clearCartData() {
    this.cs.unsetCartItems();
    this.syncToLocalStorage(LocalKeys[0], 0);
    this.syncToLocalStorage(LocalKeys[1], 0);
  }

  onDelete($event: OrderItem) {
    this.cs.unsetCartItem($event);
  }

  onUpdate($event: [OrderItem, number]) {
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

