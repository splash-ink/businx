import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'businx-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id;
  doc$: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private readonly fds: FirestoreDataService
  ) { }

  ngOnInit() {
  }

}
