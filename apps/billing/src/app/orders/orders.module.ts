import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { InvoiceModule } from '@businx/invoice';
import { FormsModule } from '@angular/forms';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderService } from './order.service';


@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent, OrderCardComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    InvoiceModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
