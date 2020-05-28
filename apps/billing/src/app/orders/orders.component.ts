import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Order } from '@businx/data-models';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'businx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  sort = '';
  ref = 'companies/splashink/invoices';
  docs$: Observable<Order []>;

  trackedOrder: Order;

  constructor(
    private readonly fds: FirestoreDataService,
    private readonly orderService: OrderService,
    private router: Router
  ) { }

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
