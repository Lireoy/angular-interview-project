import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NameValidatorComponent} from './name-validator.component';

describe('EmailValidatorComponent', () => {
  let component: NameValidatorComponent;
  let fixture: ComponentFixture<NameValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
