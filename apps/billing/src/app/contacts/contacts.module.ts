import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { CardOverviewComponent } from './shared/card-overview/card-overview.component';
import { ContactListComponent } from './shared/contact-list/contact-list.component';
import { ContactListItemComponent } from './shared/contact-list-item/contact-list-item.component';


@NgModule({
  declarations: [
    ContactsComponent,
    PageTitleComponent,
    CardOverviewComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
