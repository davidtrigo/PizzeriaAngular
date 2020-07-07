import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { UserModule } from 'projects/pizzeria/user';  //incorrecto?
 
//import { UserModule } from '../user/user.module'

const providers = [];

@NgModule({
  declarations: [PizzaslistComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    UserModule
  ]
})
export class PizzasModule { }


@NgModule({})
export class PizzasSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PizzasModule,
      providers: providers
    }
  }
}