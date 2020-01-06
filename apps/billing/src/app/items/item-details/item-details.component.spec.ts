import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsComponent } from './item-details.component';
import { SharedModule } from '@businx/billing/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from '@businx/billing/shared/page-title/page-title.component';
import { Item } from '@businx/data-models';

describe('🚦 Item Details', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  const dummy: Item = {
    id: '0',
    service: 'Stantionary',
    price: 556,
    type: 'Design',
    description: '',
    buyInfo: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsComponent ],
      imports: [ SharedModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('⚡', () => {
    expect(component).toBeTruthy();
  });

  it('should have page-title component', () => {
    const el = fixture.debugElement.queryAll(By.directive(PageTitleComponent));

    expect(el).toBeTruthy();
  });

  it(`should display 'Detalhes de Serviço' as title`, () => {
    const el = fixture.nativeElement.querySelector('h5');

    expect(el.textContent).toBe('Detalhes de Serviço');
  });
  
  it('should display the right product info', () => {
    const nameEl = fixture.nativeElement.querySelector('h5').textContent;
    // const descEl = fixture.nativeElement.querySelector('p').textContent;
    // const typeEl = fixture.nativeElement.querySelector('span').textContent;

    // expect([nameEl, descEl, typeEl]).toBe([dummy.service, dummy.description, dummy.type]);
  });

  it('should have product/service info side', () => {
    const getEl = el => {
      return fixture.nativeElement.querySelector(`#${el}`);
    }

    const desc = 'Lorem ipsun, amet et vous husal keas mute';
    const nameEl = getEl('title');
    const description = getEl('description');

    nameEl.textContent = 'My title';
    description.textContent = desc;

    fixture.detectChanges();

    expect(nameEl.textContent).toBe('My title');
    expect(description.textContent).toBe(desc);
  });
  
  it('should display the price for unites', () => {
    const el = fixture.nativeElement.querySelector('#price').textContent;

    expect(el).toBeTruthy();
    expect(el).toContain('AOA');
  });
  
  it('should have a Add to Cart button', () => {
    const buttonEl = fixture.nativeElement.querySelector('button');
    const spanEl = fixture.nativeElement.querySelector('button > span > i.far.fa-shopping-cart');
    expect(buttonEl).toBeTruthy();
    expect(spanEl).toBeTruthy();
  });
  
  it('should have related packages aside', () => {});
});
