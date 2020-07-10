import { CommonModule } from '@angular/common';
import { getRoutes } from './routes';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@pizzeria/core';
import { ValidatorsModule } from '@pizzeria/validators';
import { LoginserviceService } from './loginservice.service';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';


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
    RouterModule.forChild(getRoutes(true))
  ],
  providers: [LoginserviceService],
})
export class LoginSharedModule {
}
