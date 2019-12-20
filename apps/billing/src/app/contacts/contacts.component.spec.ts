import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@bill/shared/shared.module';
import { ContactsComponent } from './contacts.component';
import { ResumeCard } from '@bill/shared/resume-card/resume-card';
import { By } from '@angular/platform-browser';
import { ResumeCardComponent } from '@bill/shared/resume-card/resume-card.component';
import { PageTitleComponent } from '@bill/shared/page-title/page-title.component';
import { ContactCreateModalComponent } from './contact-create-modal/contact-create-modal.component';

describe('🚦 ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  const CARDS: ResumeCard [] = [
    {
      title: 'Novos contactos',
      isCurrency: false,
      icon: {
        bg: 'bg-gradient-danger',
        class: 'fa-users'
      },
      values: {
        previews: 100000,
        current: 20000
      }
    },
    {
      title: 'Vendas totais',
      isCurrency: true,
      icon: {
        bg: 'bg-gradient-success',
        class: 'fa-hand-holding-usd'
      },
      values: {
        previews: 370000,
        current: 872000
      }
    },
    {
      title: 'Encomendas',
      isCurrency: false,
      icon: {
        bg: 'bg-gradient-info',
        class: 'fa-tag'
      },
      values: {
        previews: 72,
        current: 72
      }
    },
    {
      title: 'Terceiros',
      isCurrency: true,
      icon: {
        bg: 'bg-gradient-info',
        class: 'fa-tag'
      },
      values: {
        previews: 55000,
        current: 47630
      }
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    
  }));

  beforeEach(async (() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Contactos' as title`, () => {
    const el = fixture.debugElement.query(By.directive(PageTitleComponent));
    
    expect(el).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h5').textContent).toContain('Contactos');
  });

  it('should render all Cards in DOM', () => {
    component.contactsCrd = CARDS;
    
    expect(component.contactsCrd.length).toBe(4);
    
    fixture.detectChanges();
    
    const el = fixture.debugElement.queryAll(By.directive(ResumeCardComponent));
    
    expect(el.length).toBe(4);
  });

  it('should have modal to create new contacts', () => {
    const el = fixture.debugElement.queryAll(By.directive(ContactCreateModalComponent));
    
    expect(el).toBeTruthy();
  });


});
