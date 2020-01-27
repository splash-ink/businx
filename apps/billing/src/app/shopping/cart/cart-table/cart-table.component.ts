import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartItem } from '../cart.model';

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

  @Input('data') data: ICartItem [];
  @Output('onUpdate') onUpdate = new EventEmitter<[ICartItem, number]>();
  @Output('onDelete') onDelete = new EventEmitter<ICartItem>();

  constructor() { }

  ngOnInit() {
  }

  unset(item: ICartItem) {
    this.onDelete.emit(item);
  }

  update(item: ICartItem, newVal: number) {
    this.onUpdate.emit([item, newVal]);
  }

}
