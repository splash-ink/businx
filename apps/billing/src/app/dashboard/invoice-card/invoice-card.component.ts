import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@businx/data-models';

@Component({
  selector: 'businx-invoice-card',
  templateUrl: './invoice-card.component.html',
  styles: []
})
export class InvoiceCardComponent implements OnInit {

  @Input() order: Omit<Order, "shopItems" | "ship" | "discounts" | "tax" | "subtotal">;

  constructor() { }

  ngOnInit() {
  }

}
