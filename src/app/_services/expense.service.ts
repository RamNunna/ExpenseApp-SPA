import { Injectable } from "@angular/core";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IExpense } from "../_models/IExpense";

@Injectable({
  providedIn: "root",
})
export class ExpenseService {
  expenses: any = {};
  baseUrl = "http://localhost:44354/api/expense/";
  model: any;
  constructor(private http: HttpClient) {}
  getExpenses(userId: string): Observable<IExpense[]> {
    let params = new HttpParams();
    params = params.append("userId", userId);

    let token = localStorage.getItem("token");

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    headers.append("Authorization", `Bearer ${token}`);
    console.log(headers);
    const options = { params: params, headers: headers };

    return this.http.get<IExpense[]>(this.baseUrl + "expenses", options);
  }
  addExpense(model: any) {
    model.userid = localStorage.getItem("userid");
    return this.http.post(this.baseUrl, model).subscribe(
      (next) => {
        console.log("Expense added sucessfully");
      },
      (error) => {
        console.log("somthing wrong in adding expenses");
      }
    );
  }
}
