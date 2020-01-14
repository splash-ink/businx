import { async, TestBed } from '@angular/core/testing';
import { InvoiceModule } from './invoice.module';

describe('🚦 Invoice Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InvoiceModule]
    }).compileComponents();
  }));

  it('⚡', () => {
    expect(InvoiceModule).toBeDefined();
  });
});
