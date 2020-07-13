import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { routing } from './expense.routing';
import { ExpenseComponent } from './expense.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [ExpenseComponent]
})
export class ExpenseModule { }
