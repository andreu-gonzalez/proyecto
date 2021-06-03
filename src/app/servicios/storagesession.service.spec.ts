
import { TestBed } from '@angular/core/testing';

import { StoragesessionService } from './storagesession.service';

describe('StoragesessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoragesessionService = TestBed.get(StoragesessionService);
    expect(service).toBeTruthy();
  });
});