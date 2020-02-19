import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { ITEMS_TABLE_COLUMNS, itemPreview } from '@businx/data-models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'businx-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  ref = 'companies/splashink/items';
  itemsTbl: Table;
  subscription: Subscription;
  items$: itemPreview [] = [];

  constructor() { }

  ngOnInit() {
    this.itemsTbl = {
      columns: ITEMS_TABLE_COLUMNS,
      dataset: this.items$,
      collection: 'items',
      title: 'Serviços'
    }
  }

}
