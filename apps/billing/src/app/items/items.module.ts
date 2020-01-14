import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SharedModule } from '@businx/billing/shared/shared.module';
import { ItemCreateModalComponent } from './item-create-modal/item-create-modal.component';
import { ItemFormComponent } from './shared/item-form/item-form.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemEditComponent } from './item-edit/item-edit.component';


@NgModule({
  declarations: [ItemsComponent, ItemCreateModalComponent, ItemFormComponent, ItemDetailsComponent, ItemEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
