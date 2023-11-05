import { TestBed } from '@angular/core/testing';

import { CalcularFreteService } from './calcular-frete.service';

describe('CalcularFreteService', () => {
  let service: CalcularFreteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularFreteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
