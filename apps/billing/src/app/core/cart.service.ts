import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '@businx/data-models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @SyncLocalStorage()
  items$: CartItem[] = [];
  
  private readonly STORAGE: string = 'CART_ITEMS';

  constructor() { }

  getAll(): Observable<CartItem[]> {
    const ls = JSON.parse(localStorage.getItem(this.STORAGE));

    return of(ls);
  }

  add(obj: CartItem) {
    const lsI = localStorage.getItem(this.STORAGE);
    const dataset: CartItem[] = (lsI !== null) ? JSON.parse(lsI) : [];
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

  remove(obj: CartItem) {
    this.items$.find((val, idx) => {
      if (val.item.id == obj.item.id) {
        this.items$.splice(idx, 1);
      }
    });

    this.save(this.items$);
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
