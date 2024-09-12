import { TestBed } from '@angular/core/testing';

import { HallofFameService } from './hallof-fame.service';

describe('HallofFameService', () => {
  let service: HallofFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallofFameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
