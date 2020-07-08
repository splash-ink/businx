import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@businx/data-models';

@Component({
  selector: 'businx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input('invoice-data') doc: Order;

  terms = 'O cliente deve tomar conhecimento sobre os itens da factura antes do pagamento. O pagamento de toda a factura deve ser feito no prazo\
  da factura, sendo que no contrário será necessário a emissão de uma nova. Todo o pagamento parcial só é válido apartir de 70% do valor\
  total da factura acompanhado a uma declaração de pagamento parcial assinado pela direcção. Findo o prazo da conclusão de pagamento\
  parcial o cliente tem apenas 5 dias para efectuar o mesmo com o acrécimo de 10% por cada dia, tendo terminado o prazo e não houver\
  pagamento do mesmo a factura será automáticamente nula. Não fazemos devoluções de valores.';

  constructor() { }

  ngOnInit() {
  }

}
