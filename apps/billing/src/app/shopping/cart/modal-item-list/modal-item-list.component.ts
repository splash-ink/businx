import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../cart.model';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-modal-item-list',
  templateUrl: './modal-item-list.component.html',
  styles: []
})
export class ModalItemListComponent implements OnInit {

  constructor(
    private cs: CartService,
    private readonly fds: FirestoreDataService
  ) { }

  add () {
    this.cs.setCartItem(new ICartItem({
      id: 258,
      name: 'Service name',
      price: 9000,
      description: 'My cart item description',
      nature: 'test',
      buyInfo: false
    }, 1, false));
  }

  ngOnInit() {
  }

}
