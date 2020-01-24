import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartItem } from '../cart.model';

@Component({
  selector: 'businx-modal-item-list',
  templateUrl: './modal-item-list.component.html',
  styles: []
})
export class ModalItemListComponent implements OnInit {

  constructor(private cs: CartService) { }

  add () {
    this.cs.setCartItem(new ICartItem({
      id: 258,
      service: 'Service name',
      price: 9000,
      description: 'My cart item description',
      type: 'test',
      buyInfo: false
    }, 1, false));
  }

  ngOnInit() {
  }

}
