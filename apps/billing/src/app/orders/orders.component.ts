import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'businx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  sort = '';

  constructor() { }

  ngOnInit() {
  }

}
