import { Component, OnInit } from '@angular/core';
import { ListItem } from '@shared/table/table.component';

@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  columns = ['Nome', 'Criado em', 'Projetos', 'Vendas totais', 'Actividade'];
  dataset: ListItem[] = [
    {
      name: 'Georgia da Costa',
      createdAt: Date.now(),
      projects: 44,
      totalSales: 7000000,
      activity: []
    },
    {
      name: 'Anisa Makayla S. da Costa',
      createdAt: Date.now(),
      projects: 3,
      totalSales: 82000,
      activity: []
    },
    {
      name: 'Jorge da Costa Jr.',
      createdAt: Date.now(),
      projects: 66,
      totalSales: 15190000,
      activity: []
    }
  ];
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
  }

}
