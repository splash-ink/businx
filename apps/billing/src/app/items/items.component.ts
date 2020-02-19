import { Component, OnInit, OnDestroy } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { ITEMS_TABLE_COLUMNS, itemPreview } from '@businx/data-models';
import { Subscription } from 'rxjs';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit, OnDestroy {

  ref = 'companies/splashink/items';
  itemsTbl: Table;
  subscription: Subscription;
  items$: itemPreview [] = [];

  constructor(private readonly fsds: FirestoreDataService) { }

  ngOnInit() {
    this.itemsTbl = {
      columns: ITEMS_TABLE_COLUMNS,
      dataset: this.items$,
      collection: 'items',
      title: 'Serviços'
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
