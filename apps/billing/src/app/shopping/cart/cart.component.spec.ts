import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { SummaryComponent } from '../summary/summary.component';
import { ModalItemListComponent } from '../modal-item-list/modal-item-list.component';

describe('🚦 Cart [Page]', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        CartTableComponent,
        ModalItemListComponent,
        SummaryComponent
      ]
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
  it('display\'s the invoice/order info', () => {});
  it('has the issue date', () => {});
  it('should render the correct due date', () => {});
  it('add the selected client for the shop', () => {});
  it('removes the selected client for the shop', () => {});
  it('has a modal to select client', () => {});
});
