import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { GrowthCardComponent } from '../shared/growth-card/growth-card.component';
import { GrowthCardModel } from '../shared/growth-card/growth-card.model';

describe('Dashboard Page', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let gwthHostFixture: ComponentFixture<GrowthCardComponent>;
  let gwthHostComponent: GrowthCardComponent;

  const cards: GrowthCardModel [] = [
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
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        GrowthCardComponent
      ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    gwthHostFixture = TestBed.createComponent(GrowthCardComponent);
    gwthHostComponent = gwthHostFixture.componentInstance;
  });

  it('should display three growth cards', () => {
    component.growthCards$ = cards;

    fixture.detectChanges();

    const growthCards = fixture.debugElement
    .queryAll(By.directive(GrowthCardComponent));

    expect(component).toBeTruthy();
    expect(growthCards.length).toBe(3);
  });

  describe('earns', () => {
    it('should have the earns card', () => {
      expect(fixture.nativeElement.querySelector('#earns-card')).toBeTruthy();
    });

    it(`should display the 'Meus Ganhos' as title`, () => {
      const titleEl = fixture.nativeElement.querySelector('#earns-card > h1');

      expect(titleEl.textContent).toBe('Meus Ganhos'.toUpperCase());
    });

    it('should display\'s the month total as currency value', () => {
      const totalEl = fixture.nativeElement.querySelector('#earns-total');

      expect(totalEl.textContent).toContain('Kz');
    });

    it('shows the growth bagde', () => {
      const badgeEl = fixture.nativeElement.querySelector('.badge');

      expect(badgeEl).toBeTruthy();
    });
  });

});
