import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestoreDataService } from './firestore-data.service';

@NgModule({
  imports: [CommonModule],
  providers: [FirestoreDataService]
})
export class FirestoreDataServiceModule {}
