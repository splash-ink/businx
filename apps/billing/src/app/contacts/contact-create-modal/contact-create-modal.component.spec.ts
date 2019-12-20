import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateModalComponent } from './contact-create-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactCreateModalComponent', () => {
  let component: ContactCreateModalComponent;
  let fixture: ComponentFixture<ContactCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCreateModalComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should be a modal per definition', () => {
    const el = fixture.debugElement.queryAll(By.css('.modal'));

    expect(el).toBeTruthy();
  });
});
