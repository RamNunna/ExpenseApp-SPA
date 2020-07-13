import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
    {
      path:'expense',
      component:ExpenseComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
