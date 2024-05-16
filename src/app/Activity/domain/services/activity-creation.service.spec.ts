import { TestBed } from '@angular/core/testing';

import { ActivityCreationService } from './activity-creation.service';

describe('ActivityCreationService', () => {
  let service: ActivityCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
