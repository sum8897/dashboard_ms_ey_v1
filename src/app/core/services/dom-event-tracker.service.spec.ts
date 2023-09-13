import { TestBed } from '@angular/core/testing';

import { DomEventTrackerService } from './dom-event-tracker.service';

describe('DomEventTrackerService', () => {
  let service: DomEventTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomEventTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
