import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@businx/data-models';

@Component({
  selector: 'businx-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input() order: Omit<Order, 'shopItems' | 'date' | 'ship' | 'discounts' | 'tax' | 'subtotal'>;

  constructor() { }

  ngOnInit() {
  }

}
