import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SharedModule } from '@bill/shared/shared.module';
import { ItemCreateModalComponent } from './item-create-modal/item-create-modal.component';


@NgModule({
  declarations: [ItemsComponent, ItemCreateModalComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
