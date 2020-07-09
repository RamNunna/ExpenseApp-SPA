import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent  } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
const appRoutes : Routes =[
    {path: 'register', component : RegisterComponent },
    {path:'login', component:LoginComponent},
    {path:'expense', component:ExpenseComponent},
    {path:'' , redirectTo:'all' , pathMatch:'full'}
];

export const routing=RouterModule.forRoot(appRoutes);   