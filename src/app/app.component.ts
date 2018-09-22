import { Component } from '@angular/core';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
}
