import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from '@pizzeria/user';
import { AppMenuComponent } from './app-menu/app-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
