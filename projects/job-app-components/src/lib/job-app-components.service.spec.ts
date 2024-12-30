import { TestBed } from '@angular/core/testing';

import { JobAppComponentsService } from './job-app-components.service';

describe('JobAppComponentsService', () => {
  let service: JobAppComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAppComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
