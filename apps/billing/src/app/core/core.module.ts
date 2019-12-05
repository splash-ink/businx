import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const comps = [
  NavComponent,
  SidebarComponent
];


@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
