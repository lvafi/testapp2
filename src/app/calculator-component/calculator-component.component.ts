import { Component, OnInit } from '@angular/core';
import { NgbdButtonsCheckbox } from './button-checkbox';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

  state : string = "numberOne";
  numberOne : Number;
  numberTwo : Number;
  display : string = "";
  operator : string = "Add";

  constructor() { }

  ngOnInit() {
  }

  enterNumber (number: string ) {
    this.display += number;
  }

  operate (op : string) {
    if (this.state == "numberOne") {
      // copy the display to numberOne
      this.numberOne = parseFloat(this.display);
      // clear display
      this.display = "";
      // flip state to numberTwo
      this.state = "numberTwo";
    } else if (this.state == "numberTwo") {
      // copy the display to numberOne
      this.numberOne = parseFloat(this.display);
      // clear display
      this.display = "getresult";      
    }
  }

  getresult () {

  }
}
