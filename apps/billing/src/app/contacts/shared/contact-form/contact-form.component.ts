import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as _ } from '@angular/forms';
import { Contact } from '@businx/billing/contacts/contact.model';
import { FormValidationService } from '@businx/billing/core/form-validation.service';
import { COINS, Coins, GREETINGS } from '@businx/data-models';
import { FirestoreDataService } from '@businx/firestore-data-service';
import * as $ from 'jquery';

@Component({
  selector: 'businx-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() type: 'card' | 'modal' = 'card';
  @Input() incoming?: Contact;

  form: FormGroup;
  coins: Coins [];
  greetings;

  constructor(
    private fb: FormBuilder,
    public fv: FormValidationService,
    private readonly fds: FirestoreDataService
    ) {
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

  async create() {
    try {
      $('#txt').remove();
      $('button[type="submit"]').append('<i class="far fa-circle-notch fa-spin"></i>');

      const data: Contact = {
        ...this.form.value as Contact
      }
      await this.fds.create('companies/splashink/contacts', data);

      $('button[type="submit"] > i').remove();
      $('button[type="submit"]').append('<span id="txt">Salvar</span>');

      this.form.reset();

      $('#cancelBtn').click();
      // display a notification
    } catch (error) {
      console.error(error);
    }
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

  ngAfterViewInit() {
    if (this.type === 'modal')
      $('#cancelBtn').attr('data-dismiss', this.type);
  }

}
