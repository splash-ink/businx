import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { InvoiceModule } from '@businx/invoice';
import { FormsModule } from '@angular/forms';
import { OrderCardComponent } from './order-card/order-card.component';


@NgModule({
  declarations: [OrdersComponent, OrderListComponent, OrderCardComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    InvoiceModule
  ]
})
export class OrdersModule { }
