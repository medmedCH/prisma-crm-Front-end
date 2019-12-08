import { TestBed } from '@angular/core/testing';

import { APISService } from './apis.service';

describe('APISService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APISService = TestBed.get(APISService);
    expect(service).toBeTruthy();
  });
});
