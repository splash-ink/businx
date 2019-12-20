import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('🚦 ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      providers: [ FormBuilder ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start with an array of coins', () => {
    expect(component.coins.length).toBe(10);
  });

  it('should have an empty array of coins', () => {
    component.coins = [];
    expect(component.coins.length).toBe(0);
  });

  it('should have a Form', () => {
    expect(fixture.debugElement.queryAll(By.css('form'))).toBeTruthy();
  });

  it(`should render the title 'Novo Cliente'`, () => {
    const el = fixture.nativeElement.querySelector('h6');

    expect(el).toBeTruthy();
    expect(el.textContent).toContain('Novo Cliente');
  });

  it(`should have save button with text 'Salvar'`, () => {
    expect(fixture.nativeElement.querySelector('.btn-primary').textContent).toContain('Salvar');
  });

  it(`should have cancel button with text 'Cancelar'`, () => {
    expect(fixture.nativeElement.querySelector('button').textContent).toContain('Cancelar');
  });

  it('should have two (2) Account-Type inputs radio', () => {
    expect(fixture.debugElement.queryAll(By.css('input[type="radio"]')).length).toBe(2);
  });

  it('should have Greet & Coin Selects', () => {
    expect(fixture.debugElement.queryAll(By.css('select')).length).toBe(2);
  });

  it('should have seven (7) inputs to create a new contact', () => {
    expect(fixture.debugElement.queryAll(By.css('input')).length).toBe(7);
  });
  
  it('should have a dismissable button to form that default type\'s modal', () => {
    component.type = 'modal';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button[data-dismiss]')).toBeTruthy();
  });

  it('should not have a dismiss button default type as card', () => {
    component.type = 'card';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button[data-dismiss]')).toBeFalsy();
  });
});
