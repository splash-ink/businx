import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [
    ContactsComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
