import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShippingAddressComponent} from './shipping-address/shipping-address.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {EmailValidatorComponent} from './email-validator/email-validator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NameValidatorComponent} from './name-validator/name-validator.component';
import {PhoneValidatorComponent} from './phone-validator/phone-validator.component';
import {CountryValidatorComponent} from './country-validator/country-validator.component';
import {MatSelectModule} from '@angular/material/select';
import { ZipCityAutofillComponent } from './zip-city-autofill/zip-city-autofill.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ShippingAddressComponent,
    EmailValidatorComponent,
    NameValidatorComponent,
    PhoneValidatorComponent,
    CountryValidatorComponent,
    ZipCityAutofillComponent,
    BillingAddressComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
