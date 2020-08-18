import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneValidatorComponent } from './phone-validator.component';

describe('PhoneValidatorComponent', () => {
  let component: PhoneValidatorComponent;
  let fixture: ComponentFixture<PhoneValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
