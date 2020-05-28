import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Order } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable, Subscription } from 'rxjs';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  id;

  order$: Observable<Order>;

  private subs: Subscription;
  private readonly ref = 'companies/splashink/invoices';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly fds: FirestoreDataService
  ) { }

  /**
   * This function made a query snapshot at the URL and verify if the given URL parameter
   * exists; It returns the value if exists, otherwise an empty string.
   *
   * @param {string} paramName Indicates the name of param to find at URL
   */
  findUrlParam(paramName: string): string {
    const { paramMap } = this.activatedRoute.snapshot;

    if (paramName.length < 0 || !paramMap.has(paramName))
      return;

    return paramMap.get(paramName);
  }

  edit() {
    this.router.navigate(['shopping/cart'], { queryParams: { orderId: this.id } })
  }

  ngOnInit() {
    this.subs = this.activatedRoute.paramMap.subscribe((params : ParamMap)=> {
      this.id = params.get('id');

      this.order$ = this.fds.findByRef$<Order>(this.ref + '/' + this.id);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
