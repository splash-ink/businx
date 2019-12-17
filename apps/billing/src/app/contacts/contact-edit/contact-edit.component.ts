import { Component, OnInit } from '@angular/core';
import { Contacts, COINS } from '@businx/data-models';

@Component({
  selector: 'businx-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  demo: Contacts = {
    accountType: 'Pessoal',
    greet: 'Sra.',
    name: 'Anisa Makayla',
    company: 'Spatial LLC',
    email: 'm.anisa@spatial.io',
    phone: '+1693555021',
    coin: COINS[1].currency,
    nif: '006127917LA044'
  };

  constructor() { }

  ngOnInit() {
  }

}
