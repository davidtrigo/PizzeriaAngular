import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http'
import { RegisterService } from './register.service'
import {CoreModule} from '@pizzeria/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ValidatorsModule} from '@pizzeria/validators'
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    BrowserModule, 
    ValidatorsModule
  ],
  providers: [RegisterService],
  bootstrap: [RegisterComponent]  
})
export class RegisterModule { }
