import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.css']
})
export class EmailValidatorComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
