import { Component, OnInit, Input } from '@angular/core';
// import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { TERMS } from './globals';
import { Invoice } from './invoice';

@Component({
  selector: 'businx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input('invoice-data') doc: Invoice;
  
  terms = TERMS;
  
  constructor() { }

  // async exportPDF() {
  //   const doc = new jsPDF('p', 'mm', 'a4', 2);
  //   const canvas = await html2canvas(this.el.nativeElement, {
  //     allowTaint: true,
  //     useCORS: false,
  //   });
  //   const width = doc.internal.pageSize.getWidth();
  //   const height = doc.internal.pageSize.getHeight() - 100;
  //   const img = canvas.toDataURL('image/png');

  //   console.log('W:' + width);
  //   console.log('H:' + height);

  //   doc.addImage(img, 'JPEG', 0, 0, width, 170);
  //   doc.save(`SPL-${this.doc.id}.pdf`);

  // }

  ngOnInit() {
  }

}
