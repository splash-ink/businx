import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InvoiceComponent],
  exports: [InvoiceComponent]
})
export class InvoiceModule {}
