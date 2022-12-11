import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Newcom1Component } from './newcom1/newcom1.component';
import { Newcom2Component } from './newcom2/newcom2.component';
import { Newcom3Component } from './newcom3/newcom3.component';
import { Newcom4Component } from './newcom4/newcom4.component';

@NgModule({
  declarations: [
    AppComponent,
    Newcom1Component,
    Newcom2Component,
    Newcom3Component,
    Newcom4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
