import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators as _ } from '@angular/forms';

@Component({
  selector: 'businx-contact-create-modal',
  templateUrl: './contact-create-modal.component.html',
  styleUrls: ['./contact-create-modal.component.css']
})
export class ContactCreateModalComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      accountType: ['', [ _.required ]],
      greet: ['', [ _.required ]],
      name: ['', [ _.required, _.minLength(5), _.maxLength(46) ]],
      phone: ['', [ _.minLength(7), _.maxLength(14) ]],
      email: ['', [ _.email ]],
      nif: [''],
      coin: ['', [ _.required ]]
    });
  }

}
