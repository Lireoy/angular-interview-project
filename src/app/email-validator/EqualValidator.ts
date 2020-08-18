import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[app][validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}
  ]
})
export class EqualValidator implements Validator {
  constructor(@Attribute('validateEqual') public validateEqual: string) {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const confirmEmailValue = control.value;

    // control value (e.g. password)
    const controlValue = control.root.get(this.validateEqual);

    // value not equal
    if (confirmEmailValue !== controlValue.value) {
      return {
        validateEqual: false
      };
    }
    return null;
  }
}
