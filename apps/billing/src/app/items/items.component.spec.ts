import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { SharedModule } from '@bill/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableComponent } from '@bill/shared/table/table.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      imports: [ SharedModule ],
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

  it(`should have a title as 'Itens'`, () => {
    const el = fixture.nativeElement.querySelector('h5');
    
    expect(el.textContent).toContain('Itens');
  });
});
