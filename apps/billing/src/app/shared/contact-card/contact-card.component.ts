import { Component, Input } from '@angular/core';
import { Contact } from '../../contacts/contact.model';
import { Router } from '@angular/router';
import { StringManipulation } from '../utils/index';
import { CartService } from '@businx/billing/shopping/cart/cart.service';

@Component({
  selector: 'businx-contact-card',
  templateUrl: './contact-card.component.html',
  styles: []
})
export class ContactCardComponent {

  @Input('data') data: Contact;
  @Input('controls') ctrl? = true;
  @Input('expose-cart-ops') cartOps? = false;

  constructor(private router: Router,
    private strmp: StringManipulation,
    public cs: CartService) {}

  navigateToEdit() {
    this.router.navigate([`/contacts/${this.data.id}/edit`]);
  }

  getNameInitials(): string {
    return this.strmp.getAbbreviation(this.data.name);
  }

}
