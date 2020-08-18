import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Country {
  name: string;
}

@Component({
  selector: 'app-country-validator',
  templateUrl: './country-validator.component.html',
  styleUrls: ['./country-validator.component.css']
})
export class CountryValidatorComponent {
  countryControl = new FormControl('', Validators.required);
  countries: Country[] = [
    {name: 'Magyaroszág'},
    {name: 'Románia'},
    {name: 'Szerbia'},
    {name: 'Horvátország'},
    {name: 'Szlovénia'}
  ];

}
