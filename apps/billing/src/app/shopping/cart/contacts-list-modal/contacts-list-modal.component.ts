import { Component, OnInit } from '@angular/core';
import { Contact } from '@businx/billing/contacts/contact.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'businx-contacts-list-modal',
  templateUrl: './contacts-list-modal.component.html',
  styles: []
})
export class ContactsListModalComponent implements OnInit {

  constructor(private cs: CartService) { }

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
