import { Component, OnInit } from '@angular/core';

import { CalculatorService } from './../calculator.service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.scss'],
  providers: [CalculatorService]
})
export class CalculatorComponentComponent implements OnInit {

  state: string = "enter Number";
  numbers: Array<number> = [];
  operators: Array<string> = [];
  result: Number = 0;
  display: string = "";
  operator: string = "Add";

  constructor(private calcService: CalculatorService) { }

  ngOnInit() {
  }

  enterNumber(number: string) {
    // if the display already is showing the total result,
    // and the user enter another digit again, 
    // the display needs to be cleared to store the new number
    if (this.state == "obtain result") {
      this.display = "";
      this.state = "enter Number";
    }
    this.display += number;
  }

  operate(op: string) {
    try {
      if (this.state == "enter Number") {
        this.operateOnSymbol(op);
      } else if (this.state == "obtain result") {
        /*
        if (op == "+" || op == "-" || op == "*" || op == "/") {
          this.state = "enter Number";
          this.operateOnSymbol(op);          
        }
        */
      }
    }
    catch (ex) {

    }
  }

  private operateOnSymbol(op) {
    // detect to see if operator is a backspace
    // this will remove the last digit(or decimal) entered in the display
    if (op == 'backspace') {
      this.display = this.display.substring(0, this.display.length - 1);
      return;
    }

    // save operator
    this.operators.push(op);

    var convertedNumber;
    // validate the display
    // if user entered a dot, this is not a valid value.
    // the UI will convert this into zero
    var reg = /^\.+$/g;
    var match = reg.test(this.display);
    if (match) {
      convertedNumber = 0;
    }
    else {
      // copy the display to number
      convertedNumber = parseFloat(this.display);
    }

    this.numbers.push(convertedNumber);

    console.log("number is =" + convertedNumber);
    // clear display
    this.display = "";
    // check to see if operation is to obtain the answer
    if (op == "=") {
      // call service to obtain result of requested operation
      this.state = "obtain result"
      this.display = this.getresult(this.operators).toString();
    }
  }

  displayNumbers() {
    return this.numbers;
  }

  getresult(operators) {
    return this.calcService.calculate(this.numbers, this.operators);
  }

  clear() {
    this.numbers = [];
    this.display = "";
  }
}
