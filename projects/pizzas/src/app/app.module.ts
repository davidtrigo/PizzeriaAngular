import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { UserModule } from '@pizzeria/user';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaslistComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forRoot(routes),
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
