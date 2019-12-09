import { Component, OnInit } from '@angular/core';
import { Table } from '@bill/shared/table/table';
import { CONTACTS_TABLE_COLUMNS, Contacts } from '@businx/data-models';

@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsTbl: Table;

  data: Contacts [] = [
    {
      name: 'Georgia Dacosta',
      company: 'Spatial LLC',
      email: 'georgia@spatialx3c.io',
      phone: '+190595962'
    },
    {
      name: 'Anisa Makayla Dacosta',
      company: 'Google Stadia',
      email: 'makayla.a@stadia.google.com',
      phone: 951826952
    }
  ]
  cards = [
    {
      title: 'Novos Clientes',
      value: 23,
      gradient: '',
      icon: {
        collection: 'far',
        arrow: 'fa-users'
      },
      description: '',
      rate: {
        badge: 'badge-soft-success',
        arrow: 'fa-arrow-up'
      }
    },
    {
      title: 'Projetos Entregues',
      value: 23,
      gradient: '',
      icon: {
        collection: 'far',
        arrow: 'fa-users'
      },
      description: '',
      rate: {
        badge: 'badge-soft-danger',
        arrow: 'fa-arrow-down'
      }
    },
    {
      title: 'Receitas',
      value: 5,
      gradient: '',
      icon: {
        collection: 'far',
        arrow: 'fa-users'
      },
      description: '',
      rate: {
        badge: 'badge-soft-danger',
        arrow: 'fa-arrow-down'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
    this.contactsTbl  = {
      columns: CONTACTS_TABLE_COLUMNS,
      dataset: this.data
    }
  }

}
