import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators as _ } from '@angular/forms';
import { COINS, GREETINGS, Coins, Contacts } from '@businx/data-models';
@Component({
  selector: 'businx-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() incoming?: Contacts;
  
  form: FormGroup;
  coins: Coins [];
  greetings;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      accountType: ['' , [_.required]],
      greet: ['', [_.required]],
      name: ['', [_.required, _.minLength(5), _.maxLength(46)]],
      company: ['', [_.minLength(2)]],
      phone: ['', [_.required, _.minLength(7), _.maxLength(14)]],
      email: ['', [_.email]],
      nif: ['', [_.minLength(14)]],
      coin: ['', [_.required, _.maxLength(3), _.minLength(2)]]
    });

    this.coins = COINS;
    this.greetings = GREETINGS;
  }

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
    if (this.incoming) {
      this.accountType.setValue(this.incoming.accountType);
      this.greet.setValue(this.incoming.greet);
      this.name.setValue(this.incoming.name);
      this.company.setValue(this.incoming.company);
      this.phone.setValue(this.incoming.phone);
      this.email.setValue(this.incoming.email);
      this.nif.setValue(this.incoming.nif);
      this.coin.setValue(this.incoming.coin);
    }
    // this.form.valueChanges.subscribe(console.log); // 👈 only for debbuging purposes 
  }

}
