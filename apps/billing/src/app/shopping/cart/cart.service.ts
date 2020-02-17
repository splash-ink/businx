import { Injectable } from '@angular/core';
import { ICartItem } from '@businx/billing/shopping/cart/cart.model';
import { Contact } from '@businx/billing/contacts';
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

  updateCartItemQty(obj: ICartItem, qty: number) {
    const cartItems: ICartItem[] = this.getCartItems();

    if (cartItems.length > 0) {
      cartItems.forEach(val => {
        if (obj.item.id == val.item.id) {
          val.quantity = qty;
        }
      });
    }

    return this.setLocalStorage(this.itemsStore, cartItems);
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

  getSubtotal(): number {
    const cartItems: ICartItem [] = this.getCartItems();
    let subtotal = 0;

    if (cartItems.length > 0) {
      cartItems.find((obj) => {
        subtotal += (obj.item.price * obj.quantity);
      });
    }

    return subtotal;
  }

  getTax() {
    const cartItems: ICartItem [] = this.getCartItems();
    let tax = 0;

    if (cartItems.length > 0) {
      cartItems.find((obj) => {
        const { item:{ price }, quantity } = obj;

        tax += ((price * quantity) * 0.14);
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
