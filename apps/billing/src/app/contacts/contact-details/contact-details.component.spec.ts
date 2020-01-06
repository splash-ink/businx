import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import { SharedModule } from '@businx/billing/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createSpyObj } from '../../test/jest.plugin';
import { convertToParamMap} from '@angular/router';
import { of } from 'rxjs';

describe('🚦 ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  let mockRouter, mockActivatedRoute;

  beforeEach(async(() => {
    mockRouter = createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      paramMap: of(convertToParamMap({id: 1}))
    }

    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [SharedModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute},
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('⚡', () => {
    expect(component).toBeTruthy();
  });
});
