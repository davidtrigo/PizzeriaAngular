import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientslistComponent } from './index/ingredientslist/ingredientslist.component';

const providers = [];

@NgModule({
  declarations: [
    IngredientslistComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ],
  providers: providers,
  bootstrap: [IngredientslistComponent]
})
export class IngredientsModule { }


@NgModule({})
export class IngredientsSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IngredientsModule,
      providers: providers
    }
  }
}