import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { CONTACTS_TABLE_COLUMNS } from '@businx/data-models';
import { Contacts } from './contacts.model';

@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsTbl: Table;

  contacts$: Contacts [] = [];

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
