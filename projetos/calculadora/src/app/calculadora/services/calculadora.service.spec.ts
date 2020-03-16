import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService)=> {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  })
  );
});
