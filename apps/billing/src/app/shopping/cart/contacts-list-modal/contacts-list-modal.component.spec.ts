import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListModalComponent } from './contacts-list-modal.component';

describe('ContactsListModalComponent', () => {
  let component: ContactsListModalComponent;
  let fixture: ComponentFixture<ContactsListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
