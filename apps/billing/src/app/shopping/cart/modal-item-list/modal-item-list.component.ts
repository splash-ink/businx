import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../cart.model';
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
    if(typeof item != 'undefined')
      this.cs.setCartItem(new ICartItem(item, 1, false));

    $('#itemListBtn').click();
  }

  ngOnInit() {
    this.docs$ = this.fds.findAllWithIds$<Item>('companies/splashink/items');
  }

}
