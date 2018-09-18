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
   * @param numbers, an array of numbers to operate on
   * @param operators an array of operators treat the next number with
   */
  calculate(numbers, operators) {
    // TBD this is mockup function logic
    // the following logic in production code, will be hidden in the cloud.
    
    // call a service and get the number
    var tempResult = numbers[0];
    for (var i = 1; i <= numbers.length; i++) {
      var tempNumber = numbers[i];
      var tempOperator = operators[i-1];
      switch (tempOperator) {
        case '+': tempResult = tempResult + tempNumber; break;
        case '-': tempResult = tempResult - tempNumber; break;
        case '*': tempResult = tempResult * tempNumber; break;
        case '/': tempResult = tempResult / tempNumber; break;
      }
    }
    console.log("number is =" + tempResult);
    return tempResult;
  }  
}
