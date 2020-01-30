import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { GrowthCardComponent } from './growth-card/growth-card.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TableComponent } from './table/table.component';
import { StringManipulation } from './utils';

const comps = [
  TableComponent,
  PageTitleComponent,
  GrowthCardComponent,
  ContactCardComponent
];

const mods = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: comps,
  exports: [comps, mods],
  imports: [
    CommonModule,
    mods
  ],
  providers: [ StringManipulation ]
})
export class SharedModule { }
