import { Component, OnInit } from '@angular/core';
import { GrowthCardModel } from '../shared/growth-card/growth-card.model';
import { growthCardsDemo } from '../shared/globals';

@Component({
  selector: 'businx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  growthCards$: GrowthCardModel [] = [];

  constructor() {
    this.growthCards$ = growthCardsDemo;
  }

  ngOnInit() {
  }

}
