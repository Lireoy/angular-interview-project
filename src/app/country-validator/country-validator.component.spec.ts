import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryValidatorComponent } from './country-validator.component';

describe('CountryValidatorComponent', () => {
  let component: CountryValidatorComponent;
  let fixture: ComponentFixture<CountryValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
