import { TestBed, inject } from '@angular/core/testing';

import { GhConnectorService } from './gh-connector.service';

describe('GhConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GhConnectorService]
    });
  });

  it('should be created', inject([GhConnectorService], (service: GhConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
