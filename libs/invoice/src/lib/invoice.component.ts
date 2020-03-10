import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@businx/data-models';

@Component({
  selector: 'businx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input('invoice-data') doc: Order;

  terms = 'O cliente deve tomar conhecimento sobre os itens da factura antes do pagamento. O pagamento de toda a factura deve se\
  r feito no prazo da factura, sendo que no contrário será necessário a emissão de uma nova. Não fazemos devoluções de valores.';

  constructor() { }

  ngOnInit() {
  }

}
