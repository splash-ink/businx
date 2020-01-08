import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '@businx/data-models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @SyncLocalStorage()
  items$: CartItem[] = [];
  private readonly STORAGE: string = 'CART_ITEMS';

  constructor() { }

  add(obj: CartItem): void {
    const copy: CartItem[] = this.items$;

    if (copy !== undefined
      && copy.length > 0
      && localStorage.getItem(this.STORAGE) !== null
      ) {
        copy.forEach(val => {
        if (obj.item.id === val.item.id) {
          val.quantity += 1;

          this.save(copy);
        } else {
          this.save(copy);
        }
      });

    }

    this.items$.push(obj);
    this.save(this.items$);
  }

  remove(obj: CartItem) {
    this.items$.find((val, idx) => {
      if (val.item.id === obj.item.id) {
        this.items$.splice(idx, 1);
      }
    });
  }

  private save(obj) {
    this.items$ = obj;
    
    localStorage.setItem(this.STORAGE, JSON.stringify(this.items$));
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
