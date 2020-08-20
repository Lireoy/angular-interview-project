import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/*
interface City {
  zip: number;
  city: string;
}*/

@Component({
  selector: 'app-zip-city-autofill',
  templateUrl: './zip-city-autofill.component.html',
  styleUrls: ['./zip-city-autofill.component.css']
})
export class ZipCityAutofillComponent {

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

  zipInput = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.minLength(4),
    Validators.maxLength(4)
  ]);

  cityOutput = new FormControl('', [
    Validators.required
  ]);

  /*
  zips: City[] = [
    {zip: 4024, city: 'Debrecen'},
    {zip: 1007, city: 'Budapest'},
    {zip: 8900, city: 'Zalaegerszeg'},
    {zip: 9023, city: 'Győr'},
    {zip: 4288, city: 'Újléta'}
  ];*/

}
