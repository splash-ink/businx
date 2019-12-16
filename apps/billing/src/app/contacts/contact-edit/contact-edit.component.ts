import { Component, OnInit } from '@angular/core';
import { Contacts } from '@businx/data-models';

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
    coin: 'USD',
    nif: '0328CA852-09'
  };

  constructor() { }

  ngOnInit() {
  }

}
