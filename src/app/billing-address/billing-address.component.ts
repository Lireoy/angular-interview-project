import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent {

  billingGroup = new FormGroup({
      newBillingAddress: new FormControl(''),
      billingName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),
      billingTaxNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}?-[0-9]{1}?-[0-9]{2}')
      ])
    }
  );
}
