import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';

import { CalculatorService } from './calculator.service';

const routes: Routes = [
  { path: '', component : CalculatorComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
