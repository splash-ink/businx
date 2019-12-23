import { Component, OnInit } from '@angular/core';
import { Table } from '@bill/shared/table/table';
import { CONTACTS_TABLE_COLUMNS, Contacts } from '@businx/data-models';
import { ResumeCard } from '@bill/shared/resume-card/resume-card';

@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsTbl: Table;

  data: Contacts [] = [
    {
      id: 1,
      name: 'Georgia Dacosta',
      company: 'Spatial LLC',
      email: 'georgia@spatialx3c.io',
      phone: '+190595962'
    },
    {
      id: 2,
      name: 'Anisa Makayla Dacosta',
      company: 'Google Stadia',
      email: 'makayla.a@stadia.google.com',
      phone: 951826952
    }
  ]
  contactsCrd: ResumeCard [] = [
    {
      title: 'Novos contactos',
      isCurrency: false,
      icon: {
        bg: 'bg-gradient-danger',
        class: 'fa-users'
      },
      values: {
        previews: 100000,
        current: 20000
      }
    },
    {
      title: 'Vendas totais',
      isCurrency: true,
      icon: {
        bg: 'bg-gradient-success',
        class: 'fa-hand-holding-usd'
      },
      values: {
        previews: 370000,
        current: 872000
      }
    },
    {
      title: 'Encomendas',
      isCurrency: false,
      icon: {
        bg: 'bg-gradient-info',
        class: 'fa-tag'
      },
      values: {
        previews: 72,
        current: 72
      }
    }
  ];
  constructor() { }

  ngOnInit() {
    this.contactsTbl  = {
      columns: CONTACTS_TABLE_COLUMNS,
      dataset: this.data,
      collection: 'contacts',
      title: 'Clientes'
    }
  }

}
