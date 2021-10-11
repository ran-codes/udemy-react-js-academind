import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const ExpenseList = (props) => {
  const [expenseYear, setExpenseYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setExpenseYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} defaultYear={expenseYear} />
      {props.items.map(function (expenseItem) {
        return (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
        }
      )}
    </Card>
  );
};

export default ExpenseList;
