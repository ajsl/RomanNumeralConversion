import { TestBed } from '@angular/core/testing';

import { RomanService } from './roman.service';

describe('RomanService', () => {
  let service: RomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
