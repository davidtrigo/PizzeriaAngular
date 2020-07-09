import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidatorService, ValidatorFactory } from '@pizzeria/validators';
import { UserService } from '@pizzeria/user';
import { LoginserviceService } from './loginservice.service';

const LOGINVALIDATOR = [{
  fields: ["email"],
  message: "email es requerido",
  validators: [{ sanitizer: false, validator: () => true, args: [1, 50] }]
},
{
  fields: ["password"],
  message: "password es requerido",
  validators: [{ sanitizer: false, validator: () => true, args: [1, 10] }]
}]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    { provide: ValidatorService, useFactory: ValidatorFactory(LOGINVALIDATOR) }
  ]
})

export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  private subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private loginService: LoginserviceService,
    private userService: UserService
  ) {
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }
  submit(): void {
    this.subscription = this.loginService.login(this.form.value).subscribe(
      async user => await this.userService.add(user),
      error => console.log(error) // TODO
    )
  }
}
