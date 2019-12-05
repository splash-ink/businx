import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';

const comps = [
  NavComponent,
  SideNavComponent
];


@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
