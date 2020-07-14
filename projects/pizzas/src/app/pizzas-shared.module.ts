import { NgModule } from '@angular/core';

import { sharedRoutes } from './routes';
import { UserModule } from '@pizzeria/user';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations:[
    PizzaslistComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(sharedRoutes),
  ],
})
export class PizzasSharedModule { }
