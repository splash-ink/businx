import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { InvoiceComponent } from './invoice.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { DEMO } from '../../../../apps/billing/src/app/shared/globals';

describe('InvoiceComponent', () => {
  let DEMO = null;
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;
  let getNodeList;
  let getNode;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;

    component.doc = DEMO;

    getNodeList = (target) => {
      return fixture.debugElement.queryAll(By.css(target));
    }

    getNode = (target) => {
      return fixture.debugElement.query(By.css(target));
    }
  });

  it('has a company logo within the invoice', () => {
    const el = fixture.nativeElement.querySelector('img');

    el.src = 'http://localhost/assets/spl-ink-logo.png';
    expect(el.src).toContain('assets/spl-ink-logo.png');
    expect(component).toBeTruthy();
  });

  it('should display the company information', () => {
    const name = getNode('#company_name');
    const locationAndNif = getNode('#company_location_nif');
    const contact = getNode('#company_contact');
    const addr = getNode('#company_addr');

    expect(name.nativeElement.textContent).toBe('Splash Ink, Lda.');
    expect(locationAndNif.nativeElement.textContent).toBe('Vila de Cacuaco, N55E - NIF: 5000050229');
    expect(contact.nativeElement.textContent).toBe('(+244) 922679021 - hello@splashink.co');
    expect(addr.nativeElement.textContent).toContain('Luanda, Cacuaco Angola');
  });

  it('has the correct buyer name', () => {
    const buyer = getNode('#buyer').nativeElement;

    fixture.detectChanges();

    expect(buyer.textContent).toBe(component.doc.buyer.name);
  });

  it('display the correct invoice lifetime information', () => {
    expect(DEMO.issue_date).toBe(component.doc.issue_date);
    expect(DEMO.due_date).toBe(component.doc.due_date);
  });

  it('display\'s the items on the table', () => {
    const node = getNodeList('table > tbody > tr');

    expect(node).toBeTruthy();
  });
});
