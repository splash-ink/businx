import { Component, OnInit, Input } from '@angular/core';
import { TERMS } from './globals';
import { Invoice } from './invoice';

@Component({
  selector: 'businx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input('invoice-data') doc: Invoice;
  
  terms = TERMS;
  
  constructor() { }

  ngOnInit() {
  }

}
