import { Component, LOCALE_ID } from '@angular/core';

import { CalculatorService } from './../calculator.service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.scss'],
  providers: [CalculatorService]
})
export class CalculatorComponentComponent {

  state = 'enter Number';
  numbers: Array<number> = [];
  operators: Array<string> = [];
  result: Number = 0;
  display = '';
  operator = 'Add';
  alert = '';

  constructor(private calcService: CalculatorService) { }

  /**
   * enterNumber
   * accepts (digit or decimal) and put into display
   *
   * if the display already is showing the total result,
   * and the user enter another digit again,
   * the display needs to be cleared to store the new number
   *
   * @param num, expects a digit or decimal
   */
  enterNumber(num: string): void  {
    if (this.state === 'obtain result') {
      this.display = '';
      this.state = 'enter Number';
    }
    this.display += num;
  }

  operate(op: string): void {
    try {
      if (this.state === 'enter Number')
        this.operateOnSymbol(op);
    } catch (ex) {
      // place alert on screen
      this.alert = ex;
    }
  }

  displayNumbers(): Array<number> {
    return this.numbers;
  }

  /**
   * Evaluate the total amount from the numbers and operators entered
   */
  getresult(): number {
    return this.calcService.calculate(this.numbers, this.operators);
  }

  /**
   * Clear display
   * resets the entire calculator stack, and start from the beginning
   */
  clear(): void {
    this.numbers = [];
    this.operators = [];
    this.display = '';
  }

  trackByFn(index, item): number {
    return index;
  }

  private removeOneCharFromDisplay(): void {
    this.display = this.display.substring(0, this.display.length - 1);
  }

  /**
   * getNumberFromDisplay
   * a function to take the current digits from the display
   * and attempt to convert it into a number
   *
   * [Note] this function will handle invalid number in format . , .. , ... etc
   *        and other number that cannot be converted properly will be treated as zero
   *
   * @return a number with decimal places if it is a floating point number
   */
  private getNumberFromDisplay(): number {
    // use regular expression to catch case with only dots
    const reg = /^\.+$/g;
    const match = reg.test(this.display);

    return (match) ? 0 :  parseFloat(this.display);
  }

  /**
   * operateOnSymbol
   *
   * Accepts an operator symbol and decide the next action
   * @param op, a valid operator as defined in Calculator Service
   */
  private operateOnSymbol(op): void {
    // detect to see if operator is a backspace
    // this will remove the last digit(or decimal) entered in the display
    if (op === 'backspace') {
      this.removeOneCharFromDisplay();

      return;
    }

    // save operator
    this.operators.push(op);

    // store number into number list
    this.numbers.push(this.getNumberFromDisplay());

    // clear display
    this.display = '';
    // check to see if operation is to obtain the answer
    if (op === '=') {
      // call service to obtain result of requested operation
      this.state = 'obtain result';
      this.display = this.getresult()
                        .toString();
    }
  }
}
