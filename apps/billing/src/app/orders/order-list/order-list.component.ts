import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Observable<Order>;

  private id;
  private readonly ref = 'companies/splashink/invoices';

  constructor(
      private readonly route: ActivatedRoute,
      private readonly fds: FirestoreDataService
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
    this.order = this.fds.findByRef$<Order>(this.ref + '/' + this.id);
  }

}
