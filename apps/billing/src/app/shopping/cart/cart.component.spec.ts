import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { SummaryComponent } from '../summary/summary.component';

describe('🚦 Cart [Page]', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        CartTableComponent,
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
});
