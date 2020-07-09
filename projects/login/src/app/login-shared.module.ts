import { CommonModule } from '@angular/common';
import { Routing } from './login-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@pizzeria/core';
import { ValidatorsModule } from '@pizzeria/validators';
import { LoginserviceService } from './loginservice.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ValidatorsModule,
    Routing.getRouting(true)
  ],
  providers: [LoginserviceService],
})
export class LoginSharedModule {
}
