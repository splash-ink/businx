import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CoreModule } from '@billing/core/core.module';
import { SideNavComponent } from '@billing/core/sidenav/sidenav.component';
import { NavComponent } from '@billing/core/nav/nav.component';
import { FooterComponent } from '@billing/core/footer/footer.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have sidenav', () => {
    fixture.detectChanges();
    const sidenavEl = fixture.debugElement.queryAll(By.directive(SideNavComponent));
    expect(sidenavEl).toBeTruthy();
  });

  it('should have navbar', () => {
    fixture.detectChanges();
    const navEl = fixture.debugElement.queryAll(By.directive(NavComponent));
    expect(navEl).toBeTruthy();
  });

  it('should have footer', () => {
    fixture.detectChanges();
    const footerEl = fixture.debugElement.queryAll(By.directive(FooterComponent));
    expect(footerEl).toBeTruthy();
  });
});
