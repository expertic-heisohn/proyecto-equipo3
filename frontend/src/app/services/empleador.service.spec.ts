import { TestBed } from '@angular/core/testing';

import { EmpleadorService } from './empleador.service';

describe('EmpleadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleadorService = TestBed.get(EmpleadorService);
    expect(service).toBeTruthy();
  });
});
