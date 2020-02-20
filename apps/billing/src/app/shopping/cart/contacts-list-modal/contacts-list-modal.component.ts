import { Component, OnInit } from '@angular/core';
import { Contact } from '@businx/billing/contacts';
import { CartService } from '../cart.service';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'businx-contacts-list-modal',
  templateUrl: './contacts-list-modal.component.html',
  styles: []
})
export class ContactsListModalComponent implements OnInit {

  docs$: Observable<Contact[]>;

  constructor(
    private readonly fds: FirestoreDataService,
    private cs: CartService
  ) { }

  add () {
    this.cs.setBuyer({
      id: 53,
      name: 'Jorge Dacosta',
      phone: +244922140791,
      email: 'jorgedacosta@null.net',
      company: 'Splash Ink',
      greet: 'Dev.'
    });
  }

  ngOnInit() {
  }

}
