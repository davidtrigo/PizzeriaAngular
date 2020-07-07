import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import {ValidatorsModule} from '@pizzeria/validators';
@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule , ValidatorsModule
  ],
  exports: [InputComponent]
})
export class CoreModule { }
