import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Item } from '@businx/data-models';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'businx-modal-item-list',
  templateUrl: './modal-item-list.component.html',
  styles: []
})
export class ModalItemListComponent implements OnInit {

  docs$: Observable<Item[]>;

  constructor(
    private cs: CartService,
    private readonly fds: FirestoreDataService
  ) { }

  add (item: Item) {
    const { name, description, price, id } = item;

    if(typeof item != 'undefined')
      this.cs.setCartItem({
        id,
        name,
        description,
        price,
        qty: 1,
        total: price
      });

    $('#itemListBtn').click();
  }

  ngOnInit() {
    this.docs$ = this.fds.findAllWithIds$<Item>('companies/splashink/items', ref => ref.orderBy("name", "asc"));
  }

}
