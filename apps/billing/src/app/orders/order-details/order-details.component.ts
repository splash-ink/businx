import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Order } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  order$: Observable<Order>;

  private subs: Subscription;
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
    this.subs = this.route.paramMap.subscribe((params : ParamMap)=> {
      this.order$ = this.fds.findByRef$<Order>(this.ref + '/' + params.get('id'));
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
