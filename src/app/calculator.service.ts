import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  /**
   * calculate
   * returns the result of the array treated with the operators
   * works with +,-,* and /
   * @param numbers, a list of numbers, in sequence entered by the user
   * @param operators, a list of operators, in sequence entered by the user
   */
  calculate(numbers, operator): number {
    // TODO - replace the following mockup call with actual API service
    //       this call will be used only during tesing

    return this.mockCalculate(numbers, operator);
  }

/**
 * mockCalculate
 * a mock function to emulator an actual call to the API Service
 * @param numbers, a list of numbers, in sequence entered by the user
 * @param operators, a list of operators, in sequence entered by the user
 */
  private mockCalculate(numbers, operators): number {
    let tempResult = numbers[0];
    for (let i = 1; i <= numbers.length; i++) {
      const tempNumber = numbers[i];
      const tempOperator = operators[i - 1];

      switch (tempOperator) {
        case '+': tempResult = tempResult + tempNumber; break;
        case '-': tempResult = tempResult - tempNumber; break;
        case '*': tempResult = tempResult * tempNumber; break;
        case '/': tempResult = tempResult / tempNumber; break;
      }
    }

    return tempResult;
  }
}
