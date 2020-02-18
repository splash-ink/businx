import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { Contact } from '@businx/billing/contacts';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Misc } from '@businx/billing/shared/utils';
@Component({
  selector: 'businx-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id;
  invoicesTbl: Table;
  contactDemo: Contact;

  constructor(
    private readonly fds: FirestoreDataService,
    private readonly utils: Misc
    ) { }

  ngOnInit() {
    this.id = this.utils.getUrlParam('id');

    this.invoicesTbl = {
      columns: ['Fatura', 'Ordem', 'Valor', 'Impostos'],
      dataset: [],
      collection: `${this.id}/invoices`,
      title: 'Facturas'
    };
  }

}
