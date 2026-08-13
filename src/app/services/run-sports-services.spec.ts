import { TestBed } from '@angular/core/testing';

import { RunSportsServices } from './run-sports-services';

describe('RunSportsServices', () => {
  let service: RunSportsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunSportsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
