import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators as _ } from '@angular/forms';
import { COINS, GREETINGS, Coins, Contacts } from '@businx/data-models';
@Component({
  selector: 'businx-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {

  @Input() type: string;
  @Input() incoming?: Contacts;
  
  form: FormGroup;

  coins: Coins [];
  greetings;

  /// Form Validators
  __accountType = [_.required];
  __greet = [_.required];
  __name = [_.required, _.minLength(5), _.maxLength(46)];
  __company = [_.minLength(2)];
  __phone = [_.required, _.minLength(7), _.maxLength(14)];
  __email = [_.email];
  __nif = [_.minLength(14)];
  __coin = [_.required, _.maxLength(3), _.minLength(2)];

  constructor(private fb: FormBuilder) { }

  get accountType() {
    return this.form.get('accountType');
  }

  get greet() {
    return this.form.get('greet');
  }

  get name() {
    return this.form.get('name');
  }

  get company() {
    return this.form.get('company');
  }

  get phone() {
    return this.form.get('phone');
  }

  get email() {
    return this.form.get('email');
  }

  get nif() {
    return this.form.get('nif');
  }

  get coin() {
    return this.form.get('coin');
  }

  ngOnInit() {
    this.form = !this.incoming
    ? this.fb.group({
      accountType: ['' , this.__accountType],
      greet: ['', this.__greet],
      name: ['', this.__name],
      company: ['', this.__company],
      phone: ['', this.__phone],
      email: ['', this.__email],
      nif: ['', this.__nif],
      coin: ['', this.__coin]
    })
    : this.fb.group({
      accountType: [this.incoming.accountType , this.__accountType],
      greet: [this.incoming.greet, this.__greet],
      name: [this.incoming.name, this.__name],
      company: [this.incoming.company, this.__company],
      phone: [this.incoming.phone, this.__phone],
      email: [this.incoming.email, this.__email],
      nif: [this.incoming.nif, this.__nif],
      coin: [this.incoming.coin, this.__coin]
    });

    this.coins = COINS;
    this.greetings = GREETINGS;

    // this.form.valueChanges.subscribe(console.log); // 👈 only for debbuging purposes 
  }

}
