import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateModalComponent } from './item-create-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableComponent } from '@billing/shared/table/table.component';

describe('ItemCreateModalComponent', () => {
  let component: ItemCreateModalComponent;
  let fixture: ComponentFixture<ItemCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreateModalComponent, ItemCreateModalComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el = fixture.nativeElement.querySelector('#item-create-modal');
    expect(el).toBeTruthy();
  });

  it('should have modal spec', () => {
    const el = fixture.nativeElement.querySelector('div[tabindex="-1"][role="dialog"][aria-labelledby="item-create-modal"][aria-hidden="true"]');
    expect(el).toBeTruthy();
  });

  it('should contain table component inisde', () => {
    const widget = fixture.debugElement.queryAll(By.directive(TableComponent));

    expect(widget).toBeTruthy();
  });
});
