import { Component, OnInit } from '@angular/core';
import { Contact } from '@businx/billing/contacts';
import { CartService } from '../cart.service';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

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

  add (contact: Contact) {
    if(typeof contact != 'undefined')
      this.cs.setBuyer(contact);

    $('#contactListBtn').click();
  }

  ngOnInit() {
    this.docs$ = this.fds.findAllWithIds$<Contact>('companies/splashink/contacts');
  }

}
