import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientslistComponent } from './index/ingredientslist/ingredientslist.component';
import { BrowserModule } from '@angular/platform-browser';

const providers = [];

@NgModule({
  
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    BrowserModule
  
  ],
  providers: providers,
  bootstrap: [IngredientslistComponent]
})
export class IngredientsModule { }

