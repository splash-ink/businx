import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormComponent } from './item-form.component';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFormComponent ],
      providers: [ FormBuilder ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a modal dmiss button when is setted as modal form', () => {
    component.type = 'modal';
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('button[data-dismiss="modal"]');

    expect(el).toBeTruthy();
  });

  it('should update the value in the control & be a validated', () => {
    component.name.setValue('Stantionary');

    fixture.detectChanges();
    
    const state = component.form.get('name').valid;
  
    expect(state).toBe(true);
  });
});
