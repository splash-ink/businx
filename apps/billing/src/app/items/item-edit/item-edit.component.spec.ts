import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditComponent } from './item-edit.component';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from '@bill/shared/page-title/page-title.component';
import { SharedModule } from '@bill/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ItemFormComponent } from '../shared/item-form/item-form.component';

describe('🚦 Item Edit Component', () => {
  let component: ItemEditComponent;
  let fixture: ComponentFixture<ItemEditComponent>;

  const doc = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditComponent ],
      imports: [ SharedModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('⚡', () => {
    expect(component).toBeTruthy();
  });

  it('should have the page title component', () => {
    expect(fixture.debugElement.query(By.directive(PageTitleComponent))).toBeTruthy();
  });

  it('should display the right title', () => {
    const title = 'My edit page';
    const el = fixture.debugElement.query(By.directive(PageTitleComponent));
    (<PageTitleComponent>el.componentInstance).title = title;

    expect(fixture.nativeElement.querySelector('h5').textContent).toBe(title);
  });

  it('should have the form component', () => {
    expect(fixture.debugElement.queryAll(By.directive(ItemFormComponent))).toBeTruthy();
  });

  it('should inject data onto form component', () => {});
});
