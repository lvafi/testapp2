import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// services
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CalculatorService]
  }));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    expect(service)
      .toBeTruthy();
    expect(httpMock)
      .toBeTruthy();
  });

  it('should be able to add 2 numbers', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const numbers = [2, 3];
    const operators = ['+', '='];
    const result = service.calculate(numbers, operators);
    expect(result)
      .not
      .toBeNull();
    expect(typeof result)
      .toEqual('number');
    expect(result)
      .toEqual(5);
  });
});
