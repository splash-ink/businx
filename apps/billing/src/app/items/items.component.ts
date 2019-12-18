import { Component, OnInit } from '@angular/core';
import { Table } from '@bill/shared/table/table';
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
      dataset: [],
      collection: 'items'
    }
  }

}
