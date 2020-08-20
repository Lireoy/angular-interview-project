import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ConfirmBillingDialogComponent} from '../confirm-billing-dialog/confirm-billing-dialog.component';
import {MatDialog} from '@angular/material/dialog';

interface Country {
  name: string;
}

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  formGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    confirmEmail: new FormControl('', [
      this.matchValidator
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    country: new FormControl('', Validators.required),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(4),
      Validators.maxLength(4)
    ]),
    city: new FormControl('', [
      Validators.required
    ]),
    newBillingAddress: new FormControl(''),
    billingName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)]),
    billingTaxNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{8}?-[0-9]{1}?-[0-9]{2}')
    ])
  });

  zipCityMap = new Map<string, string>()
    .set('1007', 'Budapest')
    .set('4288', 'Újléta')
    .set('4024', 'Debrecen')
    .set('4070', 'Balmazújváros')
    .set('4110', 'Biharkeresztes')
    .set('6200', 'Kiskőrös')
    .set('6727', 'Szeged')
    .set('8900', 'Zalaegerszeg')
    .set('9024', 'Győr')
    .set('9407', 'Sopron');

  countries: Country[] = [
    {name: 'Magyaroszág'},
    {name: 'Románia'},
    {name: 'Szerbia'},
    {name: 'Horvátország'},
    {name: 'Szlovénia'}
  ];

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmBillingDialogComponent, {
      width: '80vw',

      data: {
        email: this.formGroup.controls.email.value,
        lastName: this.formGroup.controls.lastName.value,
        firstName: this.formGroup.controls.firstName.value,
        phoneNumber: this.formGroup.controls.phoneNumber.value,
        country: this.formGroup.controls.country.value.name,
        zipCode: this.formGroup.controls.zipCode.value,
        city: this.formGroup.controls.city.value,
        newBillingAddress: this.formGroup.controls.newBillingAddress.value,
        billingName: this.formGroup.controls.billingName.value,
        billingTaxNumber: this.formGroup.controls.billingTaxNumber.value
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  matchValidator(control: AbstractControl): ValidationErrors {
    if (!control.parent) {
      return {error: 'Parent null'};
    }

    const email: string = (control.parent as FormGroup).controls.email.value;
    const confirmEmail: string = (control.parent as FormGroup).controls.confirmEmail.value;

    if (email !== confirmEmail) {
      return {error: 'Email mismatch'};
    } else {
      return null;
    }
  }
}
