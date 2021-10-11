import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const ExpenseList = (props) => {
  const [expenseYear, setExpenseYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setExpenseYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === expenseYear;
  })
  
  let expensesContent =   <h1>No ExpenseItem</h1>
  if (filteredExpenses.length !== 0) {
    expensesContent = filteredExpenses.map(function (expenseItem) {
      return (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      );
    });
  }
    return (
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          defaultYear={expenseYear}
        />
        {expensesContent}
      </Card>
    );
};

export default ExpenseList;
