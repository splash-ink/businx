import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { growthCardsDemo } from '../shared/globals';
import { GrowthCardComponent } from '../shared/growth-card/growth-card.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApexLineComponent } from '../shared/apex-line/apex-line.component';
import { asapScheduler } from "rxjs";

/*describe('Dashboard Page', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [ SharedModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    component.growthCards$ = growthCardsDemo;

    fixture.detectChanges();

    asapScheduler.schedule(() => {
      document.querySelector('chart');
    });
  });

  it('should display three growth cards', () => {

    const growthCards = fixture.debugElement
    .queryAll(By.directive(GrowthCardComponent));

    expect(component).toBeTruthy();
    expect(growthCards.length).toBe(3);
  });

  it('should have apex-chart on the page', () => {
    const apexChartEl = fixture.debugElement
    .queryAll(By.directive(ApexLineComponent));

    expect(apexChartEl.length).toBeGreaterThan(0);
  });

  it('should have the earns card', () => {
    expect(fixture.debugElement.query(By.css('#earns-card'))).toBeTruthy();
  });

  it(`should display the 'Meus Ganhos' as title`, () => {
    fixture.detectChanges();

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
});*/
