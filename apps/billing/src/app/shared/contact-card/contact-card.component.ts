import { Component, Input } from '@angular/core';
import { Contacts } from '../../contacts/contacts.model';
import { Router } from '@angular/router';
import { StringManipulation } from '../utils/index';

@Component({
  selector: 'businx-contact-card',
  templateUrl: './contact-card.component.html',
  styles: []
})
export class ContactCardComponent {

  @Input('data') data: Contacts;
  @Input('controls') ctrl? = true;
  @Input('expose-cart-ops') cartOps? = false;
  @Input('custom-function') fn?: Function;

  constructor(private router: Router, private strmp: StringManipulation) {}

  navigateToEdit() {
    this.router.navigate([`/contacts/${this.data.id}/edit`]);
  }

  getNameInitials(): string {
    return this.strmp.getAbbreviation(this.data.name);
  }

}
