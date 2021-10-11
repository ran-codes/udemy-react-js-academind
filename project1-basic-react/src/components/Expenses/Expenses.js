import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const ExpenseList = (props) => {
  const [expenseYear, setExpenseYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setExpenseYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === expenseYear;
  })
  
  
    return (
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          defaultYear={expenseYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    );
};

export default ExpenseList;
