import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Component({
  selector: 'businx-checkout',
  templateUrl: './checkout.component.html',
  styles: []
})
export class CheckoutComponent implements OnInit {

  @ViewChild('invoice', { static: true }) el: ElementRef;
  dummy = null;

  constructor(
    private readonly cs: CartService,
    private readonly dataService: FirestoreDataService
  ) { }

  async exportAsPDF() {
    const opt = {
      margin:       0,
      filename:     `SPL-${this.dummy.invoice.id}.pdf`,
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
    .set(opt)
    .from(this.el.nativeElement)
    .save();
  }

  ngOnInit() {
  }

}
