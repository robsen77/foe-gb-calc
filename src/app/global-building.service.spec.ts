import { TestBed } from '@angular/core/testing';

import { GlobalBuildingService } from './global-building.service';

describe('GlobalBuildingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalBuildingService = TestBed.get(GlobalBuildingService);
    expect(service).toBeTruthy();
  });
});
