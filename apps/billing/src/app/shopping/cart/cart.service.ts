import { Injectable } from '@angular/core';
import { Contact } from '@businx/billing/contacts';
import { OrderItem } from '@businx/data-models';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly itemsStore: string = 'CART_ITEMS';
  private readonly buyerStore: string = 'CART_BUYER';

  constructor() { }

  getBuyer () {
    const ls = localStorage.getItem(this.buyerStore);

    return ls == null ? null : JSON.parse(ls);
  }

  setBuyer(buyer: Contact): void {
    this.setLocalStorage(this.buyerStore, buyer);
  }

  unsetBuyer(): void {
    localStorage.removeItem(this.buyerStore);
  }

  getCartItems() {
    const ls = localStorage.getItem(this.itemsStore);

    return ls == null ? [] : JSON.parse(ls);
  }

  setCartItem(item: OrderItem) {
    const cartItems: OrderItem [] = this.getCartItems();
    const state: boolean = (cartItems.length > 0) ? true : false;

    if (state) {
      let isPresent: boolean;

      cartItems.forEach(cartItem => {
        if (item.id === cartItem.id) {
          cartItem.qty++;
          isPresent = true;
        }
      });

      if (!isPresent) {
        cartItems.push(item);
      }

      return this.setLocalStorage(this.itemsStore, cartItems);
    } else {
      cartItems.push(item);
      return this.setLocalStorage(this.itemsStore, cartItems);
    }
  }

  updateCartItemQty(item: OrderItem, qty: number) {
    const cartItems: OrderItem [] = this.getCartItems();

    if (cartItems.length > 0) {
      cartItems.forEach(cartItem => {
        if (item.id === cartItem.id) {
          cartItem.qty = qty;
        }
      });
    }

    return this.setLocalStorage(this.itemsStore, cartItems);
  }

  unsetCartItem(item: OrderItem) {
    const cartItems: OrderItem [] = this.getCartItems();

    cartItems.find((cartItem, idx) => {
      if (item.id === cartItem.id) {
        cartItems.splice(idx, 1);
      }
    });

    this.setLocalStorage(this.itemsStore, cartItems);
  }

  unsetCartItems() {
    localStorage.removeItem(this.itemsStore);
  }

  getSubtotal(): number {
    const cartItems: OrderItem [] = this.getCartItems();
    let subtotal = 0;

    if (cartItems.length > 0) {
      cartItems.forEach((obj) => {
        subtotal += (obj.price * obj.qty);
      });
    }

    return subtotal;
  }

  getTax() {
    const cartItems: OrderItem [] = this.getCartItems();
    let tax = 0;

    if (cartItems.length > 0) {
      cartItems.forEach((obj) => {
        const { price, qty } = obj;

        tax += ((price * qty) * 0.14);
      });
    }

    return tax;
  }

  getTotal(ship: number, discount: number) {
    const cost = (this.getSubtotal() + this.getTax() + ship);

    if (discount === 0)
      return cost;

    return (cost - ((cost * discount) / 100));
  }

  setToLocalStorage(key: string, obj: any) {
    this.setLocalStorage(key, obj);
  }

  unsetFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  getFromLocalStorage(key: string, aliase?: any) {
    const ls = localStorage.getItem(key);

    return ls === null ? aliase : JSON.parse(ls);
  }

  private setLocalStorage(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
