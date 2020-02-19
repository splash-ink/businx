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
    this.sync();

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

  private sync() {
    this.subscription = this.fsds
    .findAllWithIds$<itemPreview>(this.ref)
    .subscribe((docs) => {
      docs.map((payload) => {

        const item: itemPreview = {
          id: payload.id,
          name: payload.name,
          price: payload.price,
          nature: payload.nature
        }

        if(this.items$.length > 0) {
          this.items$.forEach((doc, idx) => {
            if(doc.id == payload.id) {
              this.items$.splice(idx, 1);
            }
          });
        }

        this.items$.push(item);
      });
    });
  }

}
