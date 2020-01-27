import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has a short summary about the current shop', () => {
    expect(component).toBeTruthy();

    const els = fixture.debugElement.queryAll(By.css('small'));

    expect(els).toBeTruthy();
    expect(els[0].nativeElement.textContent).toContain('Subtotal:');
    expect(els[2].nativeElement.textContent).toContain('Taxa de entrega:');
    expect(els[5].nativeElement.textContent).toContain('Total:');
  });

  it(`shall display the subtotal & total values in 'AOA' coin`, () => {
    const subtotal = fixture.nativeElement.querySelector('#subtotal');
    const total = fixture.nativeElement.querySelector('#total');

    expect(total.textContent).toContain('AOA');
    expect(subtotal.textContent).toContain('AOA');
  });
});
