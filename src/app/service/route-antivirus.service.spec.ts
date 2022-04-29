import { TestBed } from '@angular/core/testing';

import { RouteAntivirusService } from './route-antivirus.service';

describe('RouteAntivirusService', () => {
  let service: RouteAntivirusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAntivirusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
