import { Injectable } from '@angular/core';
import { HttpParams,HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IExpense } from '../_models/IExpense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses:any={};
  baseUrl = "http://localhost:44354/api/expense/";
  model: any;
  constructor(private http: HttpClient) {}
  getExpenses(userId: string):Observable<IExpense[]> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get<IExpense[]>(this.baseUrl+"expenses",{params:params});
  }
  addExpense(model:any)
  {
    model.userid= localStorage.getItem("userid");
    return this.http.post(this.baseUrl, model).subscribe(
      (next) => {
        console.log("Expense added sucessfully");
      },
      (error) => {
        console.log("somthing wrong in adding expenses");
      }
    )
  }

}
