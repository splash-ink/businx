import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent
      },
      {
        path: ':id/edit',
        component: ContactEditComponent
      },
      {
        path: '',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
