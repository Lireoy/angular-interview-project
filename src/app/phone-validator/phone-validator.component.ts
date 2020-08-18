import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-phone-validator',
  templateUrl: './phone-validator.component.html',
  styleUrls: ['./phone-validator.component.css']
})
export class PhoneValidatorComponent {

  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$')
  ]);

}
