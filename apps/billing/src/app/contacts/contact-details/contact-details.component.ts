import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { Contact } from '@businx/billing/contacts';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'businx-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id;
  invoicesTbl: Table;
  contact$: Observable<Contact>;

  constructor(
    private readonly fds: FirestoreDataService,
    private readonly route: ActivatedRoute
  ) { }

  mergeId(data: Contact): Contact {
    const id = this.id;
    return { id, ...data }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact$ = this.fds.findByRef$(`companies/splashink/contacts/${this.id}`);

    this.invoicesTbl = {
      columns: ['Fatura', 'Ordem', 'Valor', 'Impostos'],
      dataset: [],
      collection: `${this.id}/invoices`,
      title: 'Facturas'
    };
  }

}
