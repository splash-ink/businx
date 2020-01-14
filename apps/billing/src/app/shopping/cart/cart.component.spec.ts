import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { SummaryComponent } from '../summary/summary.component';
import { ModalItemListComponent } from '../modal-item-list/modal-item-list.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '@businx/billing/shared/shared.module';

describe('🚦 Cart [Page]', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const getNodeList = target => {
    return fixture.debugElement.queryAll(By.css(target));
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        CartTableComponent,
        ModalItemListComponent,
        SummaryComponent
      ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });
  
  it('⚡', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('has client info', () => {});

  it('display\'s the invoice/order info', () => {

    component.ngOnInit();

    const spanEl = getNodeList('ul > li > span');
    const inputEl = getNodeList('ul > li > input');

    expect(spanEl[0].nativeElement.textContent).toBe('Data de emissão:');
    expect(spanEl[1].nativeElement.textContent).toBe('Data de vencimento:');
    expect(inputEl).toBeTruthy();
  });
  
  it('has the issue date', () => {});
  it('should render the correct due date', () => {});
  it('add the selected client for the shop', () => {});
  it('removes the selected client for the shop', () => {});
  it('has a modal to select client', () => {});
});
