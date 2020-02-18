import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { Contact } from '@businx/billing/contacts';
import { FirestoreDataService } from '@businx/firestore-data-service';
@Component({
  selector: 'businx-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id;
  invoicesTbl: Table;
  contactDemo: Contact;

  constructor(private readonly fds: FirestoreDataService) { }

  ngOnInit() {
    this.invoicesTbl = {
      columns: ['Fatura', 'Ordem', 'Valor', 'Impostos'],
      dataset: [],
      collection: `${this.id}/invoices`,
      title: 'Facturas'
    };
  }

}
