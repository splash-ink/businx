import { Component, OnInit, Input } from '@angular/core';
import { TERMS } from '@businx/billing/shared/globals';
import { IInvoice } from '@businx/billing/shopping/invoice.model';

@Component({
  selector: 'businx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input('invoice-data') doc: IInvoice;

  terms = TERMS;

  constructor() { }

  getTotalByItem(price: number, qty: number) {
    return (price * qty);
  }

  ngOnInit() {
  }

}
