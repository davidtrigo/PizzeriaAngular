import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@pizzeria/core';
import { RegisterService } from './register.service';
import { RegisterComponent } from './register.component';
import { ValidatorsModule } from '@pizzeria/validators';

@NgModule({
  declarations:[
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ValidatorsModule
  ],
  providers: [RegisterService],
})
export class RegisterSharedModule {
}
