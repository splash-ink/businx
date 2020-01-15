import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';

const comps = [
  NavComponent,
  SideNavComponent,
  FooterComponent
];

const servs = [CartService];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: servs
})
export class CoreModule { }
