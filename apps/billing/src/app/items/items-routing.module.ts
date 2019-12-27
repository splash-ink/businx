import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
