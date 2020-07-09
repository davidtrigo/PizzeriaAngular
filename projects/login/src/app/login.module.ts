import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { Routing } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginserviceService } from './loginservice.service'
import { CoreModule } from '@pizzeria/core'
import { ValidatorsModule } from '@pizzeria/validators'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ValidatorsModule,
    Routing.getRouting(),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [LoginserviceService],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
