import { Component, OnInit } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'businx-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  invoicesTbl: Table;
  id;
  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateToEdit(id: string) {
    this.router.navigate([`/contacts/${id}/edit`]);
  }

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
