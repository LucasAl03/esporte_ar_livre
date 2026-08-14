import { TestBed } from '@angular/core/testing';

import { CorridaCadastroService } from './corrida-cadastro-service';

describe('CorridaCadastroService', () => {
  let service: CorridaCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
