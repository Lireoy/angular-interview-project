import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ShippingAddressComponent} from '../shipping-address/shipping-address.component';
import {FormGroup} from '@angular/forms';

/**
 * @author Bence Szabo
 */

export interface DialogData {
  basicData: FormGroup;
  billingData: FormGroup;
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

  /**
   * This method closes the dialog, so
   * the user can go back and edit their
   * shipping address.
   */
  onModifyClick(): void {
    this.dialogRef.close();
  }

  /**
   * This method closes the dialog, and then
   * resets all the input fields to default empty,
   * when the user decides their shipping address is correct.
   */
  onOkClick(): void {
    this.dialogRef.close();
    this.data.basicData.reset('');
    this.data.billingData.reset('');
  }

}
