import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableComponent } from './cart-table.component';
import { By } from '@angular/platform-browser';
import { CartItem } from '@businx/data-models';

describe('CartTableComponent', () => {
  let component: CartTableComponent;
  let fixture: ComponentFixture<CartTableComponent>;
  const demo: CartItem = {
    id: 1,
    item:{
      id: 'zyx',
      service: 'service name',
      description: 'Loren ipsum, dolet amet rusir.',
      price: 5000,
      type: 'tech',
      buyInfo: false
    },
    quantity: 1,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has five (5) head columns', () => {
    const th = fixture.debugElement.queryAll(By.css('thead > tr > th'));
    
    expect(component).toBeTruthy();
    expect(th.length).toBe(5);
  });

  it('has the correct columns names', () => {
    const th = fixture.debugElement.queryAll(By.css('thead > tr > th'));
    
    expect(th[0].nativeElement.textContent).toBe('Producto');
    expect(th[1].nativeElement.textContent).toBe('Preço');
    expect(th[2].nativeElement.textContent).toBe('Quantidade');
    expect(th[3].nativeElement.textContent).toBe('Total');
    expect(th[4].nativeElement.textContent).toBe('');
  });

  it('has a actions-menu that helps manage items inside the cart', () => {
    component.docs = [demo];

    fixture.detectChanges();

    const a = fixture.debugElement.queryAll(By.css('.actions > a'));

    expect(a.length).toBe(2);
    expect(a[0].nativeElement.innerHTML).toBe(`<i class="far fa-external-link-alt"></i>`);
    expect(a[1].nativeElement.innerHTML).toBe(`<i class="far fa-times"></i>`);
  });

  it('should remove the item safely.', () => {});
});
