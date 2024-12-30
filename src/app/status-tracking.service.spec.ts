import { TestBed } from '@angular/core/testing';

import { StatusTrackingService } from './status-tracking.service';

describe('StatusTrackingService', () => {
  let service: StatusTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
