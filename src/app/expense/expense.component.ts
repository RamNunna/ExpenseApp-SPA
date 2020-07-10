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
    this.expenseService.addExpense(this.model);
    this.getExpenses();
  }
  getExpenses() {
    this.expenseService
      .getExpenses(localStorage.getItem("userid"))
      .subscribe(
        (value) => {
          console.log(value);
          this.expenses=value;
        },
        (error) => {}
      );
      console.log(this.expenses);
  }
}
