import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-name-validator',
  templateUrl: './name-validator.component.html',
  styleUrls: ['./name-validator.component.css']
})
export class NameValidatorComponent {

  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(2)]);

  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3)]);

}
