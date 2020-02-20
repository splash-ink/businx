import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableComponent } from './cart-table.component';
import { By } from '@angular/platform-browser';
import { ICartItem } from '../cart.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CartTableComponent', () => {
  let component: CartTableComponent;
  let fixture: ComponentFixture<CartTableComponent>;
  const demo: ICartItem = new ICartItem({
      id: 123,
      name: 'service name',
      description: 'Loren ipsum, dolet amet rusir.',
      price: 5000,
      nature: 'tech',
      buyInfo: false
    }, 1, false);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTableComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableComponent);
    component = fixture.componentInstance;

    component.data.push(demo);
    component.onUpdate = null;
    component.onDelete = null;

    fixture.detectChanges();
  });

  it('has five (5) head columns', () => {
    const th = fixture.debugElement.queryAll(By.css('.table thead > tr > th'));

    expect(component).toBeTruthy();
    expect(th.length).toBe(5);
  });

  it('has the correct columns names', () => {
    const th = fixture.debugElement.queryAll(By.css('.table > thead > tr > th'));

    expect(th[0].nativeElement.textContent).toBe('Producto');
    expect(th[1].nativeElement.textContent).toBe('Preço');
    expect(th[2].nativeElement.textContent).toBe('Quantidade');
    expect(th[3].nativeElement.textContent).toBe('Total');
    expect(th[4].nativeElement.textContent).toBe('');
  });

  it('has a actions-menu that helps manage items inside the cart', () => {
    const a = fixture.debugElement.queryAll(By.css('.actions > a'));

    expect(a.length).toBe(2);
    expect(a[0].nativeElement.innerHTML).toBe(`<i class="far fa-external-link-alt"></i>`);
    expect(a[1].nativeElement.innerHTML).toBe(`<i class="far fa-times"></i>`);
  });
});
