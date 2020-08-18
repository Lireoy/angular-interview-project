import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.css']
})
export class EmailValidatorComponent {

  emailGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    confirmEmail: new FormControl('', [
      this.matchValidator
    ])
  });

  matchValidator(control: AbstractControl): ValidationErrors {
    if (!control.parent) {
      return {error: 'Parent null'};
    }
    // console.log((control.parent as FormGroup).controls.email.value);
    // console.log((control.parent as FormGroup).controls.confirmEmail.value);

    const email: string = (control.parent as FormGroup).controls.email.value;
    const confirmEmail: string = (control.parent as FormGroup).controls.confirmEmail.value;

    if (email !== confirmEmail) {
      return {error: 'Email mismatch'};
    } else {
      return null;
    }
  }
}
