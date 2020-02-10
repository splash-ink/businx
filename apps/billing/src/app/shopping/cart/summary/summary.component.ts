import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'businx-summary',
  templateUrl: './summary.component.html',
  styles: []
})
export class SummaryComponent implements OnInit {

  @Input() subtotal: number;
  @Input() total: number;
  @Input() tax: number;
  @Input() ship?: number = 0;
  @Input() discount?: number = 0;

  @Output() private _ship = new EventEmitter<number>();
  @Output() private _discount = new EventEmitter<number>();

  constructor() { }

  checkDiscountLimit() {
    if (this.discount > 30)
      this.discount = 30

    this._discount.emit(this.discount);
  }

  storeShip(ship: number) {
    this._ship.emit(ship);
  }

  ngOnInit() {
  }

}
