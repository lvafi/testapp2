import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorComponentComponent } from './calculator-component.component';

// services
import { CalculatorService } from './../calculator.service';

describe('CalculatorComponentComponent', () => {
  let component: CalculatorComponentComponent;
  let fixture: ComponentFixture<CalculatorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponentComponent ],
      imports: [NgbModule, HttpClientTestingModule],
      providers: [CalculatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
