import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Contact } from '../contact.model';
@Component({
  selector: 'businx-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  invoicesTbl: Table;
  id;

  contactDemo: Contact = {
    id: 1,
    name: 'Georgia Dacosta',
    company: 'Spatial LLC',
    email: 'georgia@spatialx3c.io',
    phone: '+190595962'
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
    .paramMap
    .pipe(
      switchMap(params => this.id = params.get('id'))
    );

    this.invoicesTbl = {
      columns: ['Fatura', 'Ordem', 'Valor', 'Impostos'],
      dataset: [],
      collection: `${this.id}/invoices`,
      title: 'Facturas'
    };
  }

}
