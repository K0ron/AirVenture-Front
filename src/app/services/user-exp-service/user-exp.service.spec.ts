import { TestBed } from '@angular/core/testing';

import { UserExpService } from './user-exp.service';

describe('UserExpService', () => {
  let service: UserExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
