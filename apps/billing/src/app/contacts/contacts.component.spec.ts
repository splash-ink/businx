import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@businx/billing/shared/shared.module';
import { ContactsComponent } from './contacts.component';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from '@businx/billing/shared/page-title/page-title.component';
import { ContactCreateModalComponent } from './contact-create-modal/contact-create-modal.component';

describe('🚦 ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();


  }));

  beforeEach(async (() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Contactos' as title`, () => {
    const el = fixture.debugElement.query(By.directive(PageTitleComponent));

    expect(el).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h5').textContent).toContain('Contactos');
  });

  it('should have modal to create new contacts', () => {
    const el = fixture.debugElement.queryAll(By.directive(ContactCreateModalComponent));

    expect(el).toBeTruthy();
  });


});
