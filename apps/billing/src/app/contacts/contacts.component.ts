import { Component, OnInit, OnDestroy } from '@angular/core';
import { Table } from '@businx/billing/shared/table/table';
import { CONTACTS_TABLE_COLUMNS } from '@businx/data-models';
import { contactPreview } from './contact.model';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'businx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {

  ref = 'companies/splashink/contacts';
  subscription: Subscription;
  contactsTbl: Table;
  contacts$: contactPreview [] = [];

  constructor(private readonly fsds: FirestoreDataService) { }

  onDelete($event) {
    this.fsds.delete(`${this.ref}/${$event}`);
    this.contactsTbl.dataset.forEach((doc: contactPreview, idx) => {
      if (doc.id == $event) {
        this.contactsTbl.dataset.splice(idx, 1);
      }
    });

    this.sync();
  }

  sync() {
    this.subscription = this.fsds.findAllWithIds$<contactPreview>(this.ref, ref => ref.orderBy("name", "asc"))
    .subscribe((docs) => {
      docs.map((payload) => {
        const contact: contactPreview = {
          id: payload.id,
          name: payload.name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone
        }

        if(this.contacts$.length > 0) {
          this.contacts$.forEach((doc, idx) => {
            if(doc.id == payload.id) {
              this.contacts$.splice(idx, 1);
            }
          });
        }

        this.contacts$.push(contact);
      })
    });
  }

  ngOnInit() {
    this.sync();

    this.contactsTbl = {
      columns: CONTACTS_TABLE_COLUMNS,
      dataset: this.contacts$,
      collection: 'contacts',
      title: 'Clientes'
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
