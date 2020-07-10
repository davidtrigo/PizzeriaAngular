import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientslistComponent } from './index/ingredientslist/ingredientslist.component';
import { BrowserModule } from '@angular/platform-browser';

const providers = [];

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule
  
  ],
  providers: providers,
  bootstrap: [IngredientslistComponent]
})
export class IngredientsModule { }

