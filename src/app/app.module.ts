import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IngredientsSharedModule} from 'projects/ingredients/src/app/ingredients.module'
import {PizzasSharedModule} from 'projects/pizzas/src/app/pizzas.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientsSharedModule.forRoot(),
    PizzasSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
