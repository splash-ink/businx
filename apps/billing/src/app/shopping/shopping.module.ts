import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvoiceModule } from '@businx/invoice';
import { SharedModule } from '../shared/shared.module';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModalItemListComponent } from './cart/modal-item-list/modal-item-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SummaryComponent } from './cart/summary/summary.component';



@NgModule({
  declarations: [
    CartComponent,
    CartTableComponent,
    SummaryComponent,
    ModalItemListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule,
    InvoiceModule
  ],
  providers: [CartService]
})
export class ShoppingModule { }
