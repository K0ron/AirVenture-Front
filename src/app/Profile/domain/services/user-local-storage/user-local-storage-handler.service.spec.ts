import { TestBed } from '@angular/core/testing';

import { UserLocalStorageHandlerService } from './user-local-storage-handler.service';

describe('UserLocalStorageHandlerService', () => {
  let service: UserLocalStorageHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocalStorageHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
