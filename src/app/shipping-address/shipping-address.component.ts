import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ConfirmBillingDialogComponent} from '../confirm-billing-dialog/confirm-billing-dialog.component';
import {MatDialog} from '@angular/material/dialog';

/**
 * @author Bence Szabo
 */


/**
 * Interface for storing countries.
 */
interface Country {
  name: string;
}

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  /**
   * This FormGroup contains all the default required inputs' control,
   * and validation is handled here.
   */
  basicData = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    confirmEmail: new FormControl('', [
      this.matchValidator // custom validator
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
      Validators.pattern('[0-9]{4}')
    ]),
    city: new FormControl('')
  });
  /**
   * This FormGroup contains the new billing data
   * inputs' control, and validation for them is handled here.
   */
  billingData = new FormGroup({
    newBillingAddress: new FormControl(''),
    billingName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)]),
    billingTaxNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{8}?-[0-9]{1}?-[0-9]{2}')
    ])
  });
  /**
   * A Map to hold zip codes and city names,
   * respective to each other.
   */
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
  /**
   * An Array of Country objects, to hold country names.
   */
  countries: Country[] = [
    {name: 'Magyaroszág'},
    {name: 'Románia'},
    {name: 'Szerbia'},
    {name: 'Horvátország'},
    {name: 'Szlovénia'}
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  /**
   * Method to open a dialog upon submit click.
   * If no separate billing data is provided, this marks
   * all inputs as touched, making validation errors show up,
   * if there is any.
   *
   * If the billing data is provided, this method marks them touched
   * as well, making their validation error show up too.
   */
  openDialog(): void {
    if (this.basicData.invalid || (this.billingData.controls.newBillingAddress.value && this.billingData.invalid)) {
      this.basicData.controls.email.markAsTouched();
      this.basicData.controls.confirmEmail.markAsTouched();
      this.basicData.controls.lastName.markAsTouched();
      this.basicData.controls.firstName.markAsTouched();
      this.basicData.controls.phoneNumber.markAsTouched();
      this.basicData.controls.country.markAsTouched();
      this.basicData.controls.zipCode.markAsTouched();
      this.basicData.controls.city.markAsTouched();


      if (this.billingData.controls.newBillingAddress.value) {
        this.billingData.controls.billingName.markAsTouched();
        this.billingData.controls.billingTaxNumber.markAsTouched();
      }
    } else {
      this.dialog.open(ConfirmBillingDialogComponent, {
        width: '60vw',

        data: {
          basicData: this.basicData,
          billingData: this.billingData
        }
      });
    }
  }

  /**
   * Custom validator to match two input fields against
   * each other, whether they are matching or not.
   * @param control Object, which holds controls to the email inputs
   * @return ValidationErrors if not matching, otherwise null
   */
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

  /**
   * This method is responsible for preventing paste
   * event on the confirm email address.
   * @param event the ClipboardEvent which triggered this method
   */
  pasteEvent(event: ClipboardEvent): void {
    event.preventDefault();
  }

  /**
   * This method is responsible for autofilling
   * the city input, based on the zip code found in the
   * zip code input field.
   */
  zipCodeChange(): void {
    this.basicData.controls.city.setValue(this.zipCityMap.get(this.basicData.controls.zipCode.value));
  }
}
