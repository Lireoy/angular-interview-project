import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBillingDialogComponent } from './confirm-billing-dialog.component';

describe('ConfirmBillingDialogComponent', () => {
  let component: ConfirmBillingDialogComponent;
  let fixture: ComponentFixture<ConfirmBillingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmBillingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBillingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
