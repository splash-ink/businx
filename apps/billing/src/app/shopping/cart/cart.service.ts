import { Injectable } from '@angular/core';
import { ICartItem } from '@businx/billing/shopping/cart/cart.model';
import { Contacts } from '@businx/billing/contacts/contacts.model';
import { of, Observable } from 'rxjs';

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

  setBuyer(buyer: Contacts): void {
    this.setLocalStorage(this.buyerStore, buyer);
  }

  unsetBuyer(): void {
    localStorage.removeItem(this.buyerStore);
  }

  getCartItems() {
    const ls = localStorage.getItem(this.itemsStore);

    return ls == null ? [] : JSON.parse(ls);
  }

  setCartItem(obj: ICartItem) {
    const cartItems: ICartItem[] = this.getCartItems();
    const state: boolean = (cartItems.length > 0) ? true : false;

    if (state) {
      let isPresent: boolean;

      cartItems.forEach(val => {
        if (obj.item.id == val.item.id) {
          val.quantity += 1;
          isPresent = true;
        }
      });

      if (!isPresent) {
        cartItems.push(obj);
      }

      return this.setLocalStorage(this.itemsStore, cartItems);
    } else {
      cartItems.push(obj);
      return this.setLocalStorage(this.itemsStore, cartItems);
    }
  }

  unsetCartItem(obj: ICartItem) {
    const cartItems: ICartItem [] = this.getCartItems();

    cartItems.find((val, idx) => {
      if (val.item.id == obj.item.id) {
        cartItems.splice(idx, 1);
      }
    });

    this.setLocalStorage(this.itemsStore, cartItems);
  }

  unsetCartItems() {
    localStorage.removeItem(this.itemsStore);
  }

  /** HANDLERS **/

  getSubtotal(arr: ICartItem []): number {
    let subtotal = 0;

    arr.find((val) => {
      subtotal += (val.item.price * val.quantity);
    });

    return subtotal;
  }

  getTax(arr: ICartItem []) {
    let tax = 0;

    arr.find((val) => {
      tax += (val.item.price * 0.14);
    });

    return tax;
  }

  getTotal(subtotal, ship, tax) {
    return (subtotal + ship + tax);
  }

  private setLocalStorage(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
