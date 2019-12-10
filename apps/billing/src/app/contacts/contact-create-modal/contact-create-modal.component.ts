import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'businx-contact-create-modal',
  templateUrl: './contact-create-modal.component.html',
  styleUrls: ['./contact-create-modal.component.css']
})
export class ContactCreateModalComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
