import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { FormValidationService } from './form-validation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

describe('FormValidationService', () => {
  let service: FormValidationService;
  let fb: FormBuilder;
  let form: FormGroup;
  let name, age;

  beforeEach(async(() => {
    service = TestBed.get(FormValidationService);
    fb = new FormBuilder;
    form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.min(18), Validators.required]]
    });
    name = form.get('name');
    age = form.get('age');
  }));

  it('⚡', () => {
    expect(service).toBeTruthy();
  });
});
