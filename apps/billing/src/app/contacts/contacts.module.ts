import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '@bill/shared/shared.module';
import { ContactCreateModalComponent } from './contact-create-modal/contact-create-modal.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactCreateModalComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
