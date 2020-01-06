import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { ITEMS_TABLE_COLUMNS } from '@businx/data-models';

@Component({
  selector: 'businx-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {
  itemsTbl: Table;
  
  constructor() { }

  ngOnInit() {
    this.itemsTbl = {
      columns: ITEMS_TABLE_COLUMNS,
      dataset: [
        {
          id: 1,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Tecnologia'
        },
        {
          id: 2,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Tecnologia'
        },
        {
          id: 3,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Design'
        },
        {
          id: 4,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Design'
        },
        {
          id: 5,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Tecnologia'
        },
        {
          id: 6,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Marketing'
        },
        {
          id: 7,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Marketing'
        },
        {
          id: 8,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Tecnologia'
        },
        {
          id: 9,
          title: 'Brochura Trifold',
          price: 15000,
          nature: 'Tecnologia'
        }
      ],
      collection: 'items',
      title: 'Serviços'
    }
  }

}
