import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemEditComponent } from './item-edit/item-edit.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemsComponent
      },
      {
        path: ':id',
        component: ItemDetailsComponent
      },
      {
        path: ':id/edit',
        component: ItemEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
