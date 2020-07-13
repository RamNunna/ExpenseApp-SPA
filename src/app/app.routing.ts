import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent  } from './register/register.component';
import { LoginComponent } from './login/login.component';
const appRoutes : Routes =[
    {path: 'register', component : RegisterComponent },
    {path:'login', component:LoginComponent},
    {
        path: 'expense',
        loadChildren: () => import('./expense/expense.module').then(mod => mod.ExpenseModule)
      },
    {path:'' , redirectTo:'all' , pathMatch:'full'}
];

export const routing=RouterModule.forRoot(appRoutes);   