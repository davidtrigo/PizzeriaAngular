import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { getRoutes } from './routes';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginserviceService } from './loginservice.service'
import { CoreModule } from '@pizzeria/core'
import { ValidatorsModule } from '@pizzeria/validators'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponentComponent } from './app-component/app-component.component';

@NgModule({
  declarations: [LoginComponent, AppComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ValidatorsModule,
    RouterModule.forRoot(getRoutes(false)),
    BrowserModule
  ],
  exports: [],
  providers: [LoginserviceService],
  bootstrap: [AppComponentComponent]
})
export class LoginModule { }
