import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ShippingAddressComponent} from '../shipping-address/shipping-address.component';

export interface DialogData {
  email: string;
  confirmEmail: string;
  lastName: string;
  firstName: string;
  phoneNumber: number;
  country: string;
  zipCode: string;
  city: string;
  newBillingAddress: string;
  billingName: string;
  billingTaxNumber: string;
}

@Component({
  selector: 'app-confirm-billing-dialog',
  templateUrl: './confirm-billing-dialog.component.html',
  styleUrls: ['./confirm-billing-dialog.component.css']
})
export class ConfirmBillingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShippingAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onModifyClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
