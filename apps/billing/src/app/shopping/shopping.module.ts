import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartTableComponent } from './cart-table/cart-table.component';


@NgModule({
  declarations: [CartComponent, CartTableComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
