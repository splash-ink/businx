import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Invoice, IInvoice } from '../invoice.model';
import { Order } from '@businx/data-models';

@Component({
  selector: 'businx-checkout',
  templateUrl: './checkout.component.html',
  styles: []
})
export class CheckoutComponent implements OnInit {

  @ViewChild('invoice', { static: true }) el: ElementRef;

  doc$: Observable<Order>;
  id: string;

  constructor(
    private readonly dataService: FirestoreDataService,
    private route: ActivatedRoute
  ) { }

  async exportAsPDF() {
    const opt = {
      margin:       0,
      filename:     `SPL-${this.id}.pdf`,
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
    .set(opt)
    .from(this.el.nativeElement)
    .save();
  }

  parseInvoiceToI2(invoice: Invoice): IInvoice {
    return new IInvoice(invoice);
  }

  ngOnInit() {
    const { paramMap } =  this.route.snapshot;

    if (paramMap.has('id')) {
      this.id = paramMap.get('id');
      const ref = `companies/splashink/invoices/${this.id}`;

      this.doc$ = this.dataService.findByRef$<Order>(ref);
    }
  }

}
