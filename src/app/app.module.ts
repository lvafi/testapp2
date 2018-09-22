import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';

// services
import { CalculatorService } from './calculator.service';

const routes: Routes = [
  { path: '', component : CalculatorComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CalculatorService,
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
