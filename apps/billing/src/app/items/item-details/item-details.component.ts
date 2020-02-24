import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreDataService } from '@businx/firestore-data-service';
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

  constructor(
    private route: ActivatedRoute,
    private readonly fds: FirestoreDataService
  ) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.item$ = this.fds.findByRef$(`${this.ref}/${this.id}`);
    }
  }

}
