import { Component, OnInit } from '@angular/core';
import { Item } from '@businx/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'businx-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id;
  doc$: Observable<Item>;

  constructor() { }

  ngOnInit() {
  }

}
