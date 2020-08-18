import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCityAutofillComponent } from './zip-city-autofill.component';

describe('ZipCityAutofillComponent', () => {
  let component: ZipCityAutofillComponent;
  let fixture: ComponentFixture<ZipCityAutofillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipCityAutofillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCityAutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
