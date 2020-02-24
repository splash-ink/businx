import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as _ } from '@angular/forms';
import * as $ from 'jquery';
import { SERVICE_TYPE, Item } from '@businx/data-models';
import { FormValidationService } from '@businx/billing/core/form-validation.service';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() type?: 'modal' | 'card' = 'card';
  @Input() incoming?: Item;

  form: FormGroup;
  natures;

  constructor(
    private fb: FormBuilder,
    private fv: FormValidationService,
    private readonly fds: FirestoreDataService
  ) {
    this.form = this.fb.group({
      name: ['', [_.required, _.minLength(3)]],
      nature: ['', [_.required]],
      price: ['', [_.required, _.min(50)]],
      description: ['', _.maxLength(250)],
      buyInfo: [true, [_.required]],
      buyPrice: ['', [_.required, _.min(50)]],
      buyDescription: ['', [_.maxLength(70)]]
    });

    this.natures = SERVICE_TYPE;
  }

  async create() {
    try {
      $('#txt').remove();
      $('button[type="submit"]').append('<i class="far fa-circle-notch fa-spin"></i>');

      let ref = 'companies/splashink/items';
      let exists = false;
      const data: Item = {
        ...this.form.value as Item
      }

      if (this.incoming) {
        exists = true;
        ref = ref + `/${this.incoming.id}`;
        await this.fds.upsert(ref, data);
      } else {
        await this.fds.create(ref, data);
      }

      if (this.type === 'modal')
        $('#cancelBtn').click();

      if (!exists)
        this.form.reset();

    } catch (error) {
      console.error(error);
    } finally {
      $('button[type="submit"] > i').remove();
      $('button[type="submit"]').append('<span id="txt">Salvar</span>');

      // display a notification
    }
  }

  toggle() {
    const v = this.buyInfo.value;

    if (v === true) {
      // console.log(`[IF]:true -> ${v}`); // 👈 enable only for debbuging purposes
      this.buyPrice.enable();
      this.buyDescription.enable();
    } else if (v === false) {
      // console.log(`[IF]:false -> ${v}`); // 👈 enable only for debbuging purposes
      this.buyPrice.disable();
      this.buyDescription.disable();
    }
  }

  get name() {
    return this.form.get('name');
  }

  get nature() {
    return this.form.get('nature');
  }

  get price() {
    return this.form.get('price');
  }

  get description() {
    return this.form.get('description');
  }

  get buyInfo() {
    return this.form.get('buyInfo');
  }

  get buyPrice() {
    return this.form.get('buyPrice');
  }

  get buyDescription() {
    return this.form.get('buyDescription');
  }

  ngOnInit() {
    if (this.incoming) {
      this.name.setValue(this.incoming.name);
      this.nature.setValue(this.incoming.nature);
      this.price.setValue(this.incoming.price);
      this.description.setValue(this.incoming.description);
      this.buyInfo.setValue(this.incoming.buyInfo);
      this.buyPrice.setValue(this.incoming.buyPrice);
      this.buyDescription.setValue(this.incoming.buyDescription);
    }
  }

  ngAfterViewInit() {
    if (this.type === 'modal')
      $('#cancelBtn').attr('data-dismiss', this.type);
  }

}
