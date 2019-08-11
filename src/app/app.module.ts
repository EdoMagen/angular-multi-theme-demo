import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { StForm } from './components/form/st-form.component';
import { StChipInputComponent } from './components/chip/st-chip-input.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, StForm, StChipInputComponent, DialogComponent],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
