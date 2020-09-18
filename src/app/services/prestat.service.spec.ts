import { TestBed } from '@angular/core/testing';

import { PrestatService } from './prestat.service';

describe('PrestatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestatService = TestBed.get(PrestatService);
    expect(service).toBeTruthy();
  });
});
