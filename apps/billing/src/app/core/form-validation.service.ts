import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isInvalid (x: AbstractControl): boolean {
    return ( x.dirty || x.touched) && x.invalid;
  }

  isValid(x: AbstractControl): boolean {
    return x.dirty && x.valid;
  }
}
