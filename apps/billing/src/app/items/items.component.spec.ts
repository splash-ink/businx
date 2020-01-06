import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { SharedModule } from '@billing/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableComponent } from '@billing/shared/table/table.component';
import { ItemCreateModalComponent } from './item-create-modal/item-create-modal.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      imports: [ SharedModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page to list services', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table to display services', () => {
    const el = fixture.debugElement.queryAll(By.directive(TableComponent));
    
    expect(el).toBeTruthy();
  });

  it('should have a modal to add new items', () => {
    const el = fixture.debugElement.queryAll(By.directive(ItemCreateModalComponent));
    
    expect(el).toBeTruthy();
  });

  it(`should have a title as 'Itens'`, () => {
    const el = fixture.nativeElement.querySelector('h5');
    
    expect(el.textContent).toContain('Itens');
  });
});
