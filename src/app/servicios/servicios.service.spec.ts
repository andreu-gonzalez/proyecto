  
import { TestBed } from '@angular/core/testing';
import { serviciosService } from './servicios.service';


describe('serviciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: serviciosService = TestBed.get(serviciosService);
    expect(service).toBeTruthy();
  });
});