import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { CONTACTS_TABLE_COLUMNS } from '@businx/data-models';
import { Contact } from './contact.model';

@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsTbl: Table;

  contacts$: Contact [] = [];

  constructor() { }

  ngOnInit() {
    this.contactsTbl  = {
      columns: CONTACTS_TABLE_COLUMNS,
      dataset: this.contacts$,
      collection: 'contacts',
      title: 'Clientes'
    }
  }

}
