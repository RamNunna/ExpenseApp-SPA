import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      routing
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
