import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealBaggageComponent } from './meal-baggage.component';
import { FlightListComponent } from '../flight-list/flight-list.component';

describe('MealBaggageComponent', () => {
  let component: MealBaggageComponent;
  let fixture: ComponentFixture<MealBaggageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MealBaggageComponent,
        FlightListComponent
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealBaggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
