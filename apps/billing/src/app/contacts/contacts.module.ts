import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { CardOverviewComponent } from '../shared/card-overview/card-overview.component';


@NgModule({
  declarations: [
    ContactsComponent,
    CardOverviewComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
