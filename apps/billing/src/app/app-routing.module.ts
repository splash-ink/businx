import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'contacts',
    loadChildren: () => import('@businx/billing/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@businx/billing/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'items',
    loadChildren: () => import('@businx/billing/items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('@businx/billing/shopping/shopping.module').then(m => m.ShoppingModule)
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
