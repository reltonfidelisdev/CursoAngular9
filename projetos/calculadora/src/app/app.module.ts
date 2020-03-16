import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/components/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
