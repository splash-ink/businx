import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../shared/shared.module';
import { ContactCreateModalComponent } from './contact-create-modal/contact-create-modal.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ContactCardComponent } from '../shared/contact-card/contact-card.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactCreateModalComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactCardComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
