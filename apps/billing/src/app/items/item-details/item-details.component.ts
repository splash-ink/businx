import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '@businx/data-models';

@Component({
  selector: 'businx-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id;
  ref = 'companies/splashink/items';
  item$: Observable<Item>;

  constructor() { }

  ngOnInit() {
  }

}
