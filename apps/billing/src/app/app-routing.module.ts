import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  },
  {
    path: 'contacts',
    loadChildren: () => import('@billing/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'items',
    loadChildren: () => import('@billing/items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }