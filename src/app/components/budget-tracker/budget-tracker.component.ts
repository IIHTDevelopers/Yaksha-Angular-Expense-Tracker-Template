import { Component } from '@angular/core';
import { Expense } from '../../models/expense.models';

@Component({
  selector: 'app-budget-tracker',
  templateUrl: './budget-tracker.component.html',
  styleUrls: ['./budget-tracker.component.css']
})
export class BudgetTrackerComponent {
  expenses: any = null;
  newExpense: Expense = { id: 0, description: '', amount: 0, date: '', category: 'cash' };
  editingExpense: Expense | null = null;

  addOrUpdateExpense() {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  editExpense(expense: Expense) {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  updateExpense() {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  cancelEdit() {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  addExpense() {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  deleteExpense(expense: Expense) {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
  }

  calculateTotalExpense(): number {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
    return -1;
  }

  generateUniqueId(): number {
    // write your logic here
    // feel free to remove this
    this.expenses = null;
    return -1;
  }
}
