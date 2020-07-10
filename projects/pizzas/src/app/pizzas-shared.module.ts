import { NgModule } from '@angular/core';

import { sharedRoutes } from './routes';
import { UserModule } from '@pizzeria/user';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes),
    UserModule
  ]
})
export class PizzasSharedModule { }
