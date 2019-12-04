import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { CardOverviewComponent } from './shared/card-overview/card-overview.component';
import { ListComponent } from './shared/list/list.component';


@NgModule({
  declarations: [
    ContactsComponent,
    PageTitleComponent,
    CardOverviewComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
