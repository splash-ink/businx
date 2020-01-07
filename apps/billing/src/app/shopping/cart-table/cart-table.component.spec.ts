import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableComponent } from './cart-table.component';
import { By } from '@angular/platform-browser';

describe('CartTableComponent', () => {
  let component: CartTableComponent;
  let fixture: ComponentFixture<CartTableComponent>;

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

  it('has a actions-menu that helps manage items inside the cart', () => {
    const a = fixture.debugElement.queryAll(By.css('.actions > a'));

    expect(a.length).toBe(2);
    expect(a[0].nativeElement.innerHTML).toBe(`<i class="far fa-external-link-alt"></i>`);
    expect(a[1].nativeElement.innerHTML).toBe(`<i class="far fa-times"></i>`);
  });
});
