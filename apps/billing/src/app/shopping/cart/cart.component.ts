import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Contact } from '../../contacts/contact.model';
import { Order, OrderItem } from '@businx/data-models';

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
  issueDate;
  dueDate;
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

    if(items.length > 0 && buyer !== null && (this.issueDate && this.dueDate) !== undefined) {
      return true;
    }

    return false;
  }

  async invoice() {
    const shopItems: OrderItem [] = this.cs.getCartItems();
    const buyer: Contact = this.cs.getBuyer();
    const ship = this.getShip();
    const discounts = this.getDiscount();
    const subtotal = this.getSubtotal();
    const total = this.getTotal();
    const tax = this.getTax();

    if (this.isReady) {
      try {
        const order: Order = {
          id: 0,
          buyer,
          shopItems,
          date: {
            issue: this.issueDate,
            due: this.dueDate
          },
          status: {
            pending: true,
            billed: true,
          },
          ship,
          discounts,
          tax,
          subtotal,
          total
        };

        // console.log(order);

        const invoice = await this.dataService.create<Order>(this.ref, order);

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
    // this.dueDate
    // .setDate(this.dueDate.getDate() + 14);
  }

}

