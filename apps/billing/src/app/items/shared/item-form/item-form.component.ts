import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as _, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
import { SERVICE_TYPE, Item } from '@businx/data-models';
import { FormValidationService } from '@billing/core/form-validation.service';

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

  constructor(private fb: FormBuilder, private fv: FormValidationService) {
    this.form = this.fb.group({
      name: ['', [_.required, _.minLength(3)]],
      nature: ['', [_.required]],
      sellPrice: ['', [_.required, _.min(500)]],
      sellDescription: ['', _.maxLength(70)],
      buyInfo: [true, [_.required]],
      buyPrice: ['', [_.required, _.min(500)]],
      buyDescription: ['', [_.maxLength(70)]]
    });

    this.natures = SERVICE_TYPE;
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

  get sellPrice() {
    return this.form.get('sellPrice');
  }

  get sellDescription() {
    return this.form.get('sellDescription');
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
      this.name.setValue(this.incoming.type);
      this.nature.setValue(this.incoming.type);
      this.sellPrice.setValue(this.incoming.price);
      this.sellDescription.setValue(this.incoming.description);
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
