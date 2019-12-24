import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as _, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'businx-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [_.required, _.minLength(3)]],
      nature: ['', [_.required]],
      sellPrice: ['', [_.required, _.min(500)]],
      sellDescription: ['', _.maxLength(70)],
      buyInfo: [true, [_.required]],
      buyPrice: ['', [_.required, _.min(500)]],
      buyDescription: ['', [_.maxLength(70)]]
    });
  }

}
