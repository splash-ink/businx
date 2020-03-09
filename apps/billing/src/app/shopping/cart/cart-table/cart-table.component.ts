import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartItem } from '../cart.model';
import { OrderItem } from '@businx/data-models';

@Component({
  selector: 'businx-cart-table',
  templateUrl: './cart-table.component.html',
  styles: [`
    .w-80 {
      width: 80px !important;
      }
  `]
})
export class CartTableComponent implements OnInit {

  @Input('data') orderItems: OrderItem [];
  @Output('onUpdate') onUpdate = new EventEmitter<[OrderItem, number]>();
  @Output('onDelete') onDelete = new EventEmitter<OrderItem>();

  constructor() { }

  ngOnInit() {
  }

  unset(item: OrderItem) {
    this.onDelete.emit(item);
  }

  update(item: OrderItem, newVal: number) {
    this.onUpdate.emit([item, newVal]);
  }

}
