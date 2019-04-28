import { TestBed } from '@angular/core/testing';

import { SniperService } from './sniper.service';

describe('SniperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SniperService = TestBed.get(SniperService);
    expect(service).toBeTruthy();
  });
});
