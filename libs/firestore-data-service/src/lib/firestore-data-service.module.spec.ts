import { async, TestBed } from '@angular/core/testing';
import { FirestoreDataServiceModule } from './firestore-data-service.module';

describe('FirestoreDataServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirestoreDataServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FirestoreDataServiceModule).toBeDefined();
  });
});
