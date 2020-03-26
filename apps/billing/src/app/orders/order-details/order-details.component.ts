import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  order: Order;

  private id;
  private subscription: Subscription;
  private readonly ref = 'companies/splashink/invoices';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fds: FirestoreDataService,
    private readonly orderService: OrderService
  ) { }

  /**
   * This function made a query snapshot at the URL and verify if the given URL parameter
   * exists; It returns the value if exists, otherwise an empty string.
   *
   * @param {string} paramName Indicates the name of param to find at URL
   */
  findUrlParam(paramName: string): string {
    const { paramMap } = this.route.snapshot;

    if (paramName.length < 0 || !paramMap.has(paramName))
      return;

    return paramMap.get(paramName);
  }

  ngOnInit() {
    this.id = this.findUrlParam('id');
    this.subscription = this.fds.findByRef$<Order>(this.ref + '/' + this.id)
    .subscribe(order => {
      this.order = order;
      this.orderService.emitOrder(order);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
