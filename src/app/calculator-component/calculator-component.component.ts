import { Component, OnInit } from '@angular/core';
import { NgbdButtonsCheckbox } from './button-checkbox';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

   operator : string = "Add";

  constructor() { }

  ngOnInit() {
  }

}
