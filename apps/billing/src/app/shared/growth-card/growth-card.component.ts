import { Component, OnInit, Input } from '@angular/core';
import { GrowthCardModel } from './growth-card.model';

@Component({
  selector: 'businx-growth-card',
  templateUrl: './growth-card.component.html',
  styleUrls: ['./growth-card.component.css']
})
export class GrowthCardComponent implements OnInit {

  @Input('card-config') data: GrowthCardModel;
  constructor() { }

  monthlyGroth(prev, curr) {
    let t = prev - curr;
    t = t / prev;
    t = t * 100;
    return t * -1;
  }

  isGrowing(prev, curr) {
    return curr >= prev ? true : false;
  }

  ngOnInit() {
  }

}
