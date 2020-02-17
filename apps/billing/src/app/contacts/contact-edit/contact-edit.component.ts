import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreDataService } from '@businx/firestore-data-service';
import { Contact } from '@businx/billing/contacts';
import { Observable } from 'rxjs';

@Component({
  selector: 'businx-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  id;
  doc$: Observable<Contact>;

  constructor(
    private readonly fds: FirestoreDataService,
    private route: ActivatedRoute,
    ) { }

  private getUrlParam(param: string) {
    if (param.length < 0)
      return;

    return this.route.snapshot.paramMap.get(param);
  }

  mergeId(data: Contact): Contact {
    const id = this.id;

    return { id, ...data }
  }

  ngOnInit() {
    this.id = this.getUrlParam('id');
    this.doc$ = this.fds.findByRef$<Contact>(`companies/splashink/contacts/${this.id}`);
  }

}
