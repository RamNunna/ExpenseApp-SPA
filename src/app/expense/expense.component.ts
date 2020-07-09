import { Component, OnInit } from "@angular/core";
import { ExpenseService } from "../_services/expense.service";
import { IExpense } from '../_models/IExpense';

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.css"],
})
export class ExpenseComponent implements OnInit {
  model: any = {};
  public expenses:Array<IExpense>=[];
  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.getExpenses();
  }

  addExpense() {
    return this.expenseService.addExpense(this.model);
  }
  getExpenses() {
    this.expenseService
      .getExpenses(localStorage.getItem("userid"))
      .subscribe(
        (value) => {
          this.expenses=value;
        },
        (error) => {}
      );
      console.log(this.expenses);
  }
}
