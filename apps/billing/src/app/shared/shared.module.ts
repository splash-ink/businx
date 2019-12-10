import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';

const comps = [
  TableComponent,
  PageTitleComponent,
  ResumeCardComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
