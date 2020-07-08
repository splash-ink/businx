import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, OrderItem } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Contact } from '../../contacts/contact.model';
import { CartService } from './cart.service';
import { OrderService } from '../../orders/order.service';

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

  issueDate;
  dueDate;
  orderId;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public readonly cs: CartService,
    private readonly dataService: FirestoreDataService,
    private readonly orderService: OrderService,
  ) {
    this.activatedRoute.queryParamMap

    .subscribe(params => {
      if (params.has('orderId')) {
        this.orderId = params.get('orderId');
        const ref = `companies/splashink/invoices/${this.orderId}`;

        this.dataService.docWithRefs$<Order>(ref)
        .subscribe(order => {
          this.issueDate = order.date.issue;
          this.dueDate = order.date.due;

          this.orderService.pushToCart(order);
        })
      }
    });
  }

  tax = () => this.cs.getTax() || 0;
  ship = () => this.cs.getShip() || 0;
  discount = () => this.cs.getDiscount() || 0;
  subtotal = () => this.cs.getSubtotal() || 0;
  total = () => this.cs.getTotal(this.ship(), this.discount()) || 0;

  async submit() {
    const order: Order = {
      buyer: this.cs.getBuyer(),
      shopItems: this.cs.getCartItems(),
      date: {
        issue: this.issueDate,
        due: this.dueDate
      },
      status: {
        pending: true,
        billed: true,
      },
      ship: this.ship(),
      discounts: this.discount(),
      tax: this.tax(),
      subtotal: this.subtotal(),
      total: this.total()
    };

    this.clear();

    try {
      if(this.orderId) {
        await this.dataService

        .update<Order>(`companies/splashink/invoices/${this.orderId}`, order);

        this.clearAndCheckout(this.orderId);
      } else {
       const { id } = await this.dataService
        .create<Order>('companies/splashink/invoices', order);

        this.clearAndCheckout(id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearAndCheckout(id: string | number) {
    localStorage.clear();

    this.router.navigate(['/shopping/checkout', id]);
  }

  cartState(): boolean {
    const items: OrderItem [] = this.cs.getCartItems();
    const buyer: Contact = this.cs.getBuyer();

    if(items.length > 0 && buyer !== null && (this.issueDate && this.dueDate) !== undefined) {
      return true;
    }

    return false;
  }

  clearCartItems() {
    this.cs.unsetCartItems();
    this.cs.unsetDiscount();
    this.cs.unsetShip();
  }

  clear() {
    this.cs.unsetBuyer();
    this.clearCartItems();
  }

  onCartItemDelete($event: OrderItem) {
    this.cs.unsetCartItem($event);
  }

  onCartItemUpdate($event: [OrderItem, number]) {
    const [ item, newVal] = $event;

    this.cs.updateCartItemQty(item, newVal);
  }

  syncToLocalStorage(key: string, $event: number) {
    if (typeof $event !== 'number' || undefined)
      return;

    this.cs.setToLocalStorage(key, $event);
  }

  ngOnInit() {
  }

}

