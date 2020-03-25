import { Component, OnInit } from '@angular/core';
import { GrowthCardModel } from '../shared/growth-card/growth-card.model';
import { growthCardsDemo } from '../shared/globals';
import { Observable } from 'rxjs';
import { Order } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    .empty-invoice-list {
      position: absolute;
      left: 20%;
      font-size: 1rem;
    }

    @media screen and (max-width: 375px) {
      .empty-invoice-list {
        left: .5rem;
        padding: 0 1rem;
        text-align: center;
      }
    }
    `
  ]
})
export class DashboardComponent implements OnInit {

  growthCards$: GrowthCardModel [] = [];
  orders$: Observable<Order []>;
  baseRef = 'companies/splashink';

  constructor(private readonly fds: FirestoreDataService) {
    this.growthCards$ = growthCardsDemo;
  }

  ngOnInit() {
    this.orders$ = this.fds.findAllWithIds$<Order>(this.baseRef + '/invoices', query => query.orderBy('updatedAt', 'desc').limit(4));
  }

}
