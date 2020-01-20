import { Injectable } from '@angular/core';
import { ICartItem } from '@businx/billing/shopping/cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @SyncLocalStorage()
  items$: ICartItem[] = [];

  private readonly STORAGE: string = 'CART_ITEMS';

  constructor() { }

  getAll() {
    const store = localStorage.getItem(this.STORAGE);

    if (store === null) {
      this.items$ = [];
    } else {
      this.items$ = JSON.parse(store);
    }
  }

  add(obj: ICartItem) {
    const lsI = localStorage.getItem(this.STORAGE);
    const dataset: ICartItem[] = (lsI !== null) ? JSON.parse(lsI) : [];
    const storageState: boolean = (dataset.length > 0) ? true : false;

    if (storageState) {
      let isPresent: boolean;

      dataset.forEach(val => {
        if (obj.item.id == val.item.id) {
          val.quantity += 1;
          isPresent = true;
        }
      });

      if (!isPresent) {
        dataset.push(obj);
      }

      return this.save(dataset);
    } else {
      dataset.push(obj);
      return this.save(dataset);
    }
  }

  remove(obj: ICartItem) {
    this.items$.find((val, idx) => {
      if (val.item.id == obj.item.id) {
        this.items$.splice(idx, 1);
      }
    });

    this.save(this.items$);
  }

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

  private save(obj) {
    this.items$ = obj;
    localStorage.setItem(this.STORAGE, JSON.stringify(obj));
  }
}

function SyncLocalStorage() {
  return function (target: Object, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      return val;
    }

    const setter = (next) => {
      const local = localStorage.getItem('CART_ITEMS');

      val = (local !== null) ? JSON.parse(local) : next;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  }
}
