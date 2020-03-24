import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Order } from '@businx/data-models';
import { Observable } from 'rxjs';


@Component({
  selector: 'businx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  sort = '';
  ref = 'companies/splashink/invoices';
  docs$: Observable<Order []>;

  constructor(private readonly fds: FirestoreDataService) { }

  onSort() {
    this.docs$ = this.fetch();
  }

  fetch() {
    if (this.sort === '' || this.sort === undefined) {
      return this.fds.findAllWithIds$<Order>(this.ref);
    }

    return this.fds.findAllWithIds$<Order>(
      this.ref,
      ref => ref.orderBy('createdAt', 'desc').where(`status.${this.sort}`, '==', true)
    );
  }

  ngOnInit() {
    this.docs$ = this.fetch();
  }

}
