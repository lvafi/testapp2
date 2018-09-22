import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { AppComponent } from './app.component';

// services
import { CalculatorService } from './calculator.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponentComponent,
        AppComponent
      ],
      imports: [NgbModule, HttpClientTestingModule],
      providers: [CalculatorService]
    })
    .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture
                .debugElement
                .componentInstance;
    expect(app)
    .toBeTruthy();
  }));
  it('should have as title "calculator"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture
                .debugElement
                .componentInstance;
    expect(app.title)
    .toEqual('calculator');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture
                    .debugElement
                    .nativeElement;
    expect(compiled.querySelector('h1').textContent)
                  .toContain('Welcome to calculator!');
  }));
});
