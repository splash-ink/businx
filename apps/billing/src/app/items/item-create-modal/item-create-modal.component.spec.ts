import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateModalComponent } from './item-create-modal.component';

describe('ItemCreateModalComponent', () => {
  let component: ItemCreateModalComponent;
  let fixture: ComponentFixture<ItemCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreateModalComponent ]
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
  });
});
