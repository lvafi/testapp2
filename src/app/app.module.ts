import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { NgbdButtonsCheckbox } from './calculator-component/button-checkbox';

const routes: Routes = [
  { path: '', component : CalculatorComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent,
    NgbdButtonsCheckbox
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
