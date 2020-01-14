import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditComponent } from './contact-edit.component';
import { SharedModule } from '@businx/billing/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ContactFormComponent } from '../shared/contact-form/contact-form.component';

describe('🚦 ContactEditComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEditComponent, ContactFormComponent ],
      imports: [ SharedModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it(`should contain 'Editar Contacto' as title `, () => {
    expect(fixture.nativeElement.querySelector('h5').textContent).toContain('Editar Contacto');
  });

  it('should have form to edit contact', () => {
    const el = fixture.debugElement.queryAll(By.directive(ContactFormComponent));

    expect(el).toBeTruthy();
  })
});
