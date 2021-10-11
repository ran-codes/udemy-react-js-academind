import { useState } from 'react';
import "./ExpenseForm.css";

export default function ExpenseForm (props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showForm, setShowForm] = useState(true);

  const showFormButtonHandler = (event) => {
    setShowForm(true);
  }

 const cancleFormButtonHandler = (event) => {
   setShowForm(false);
  };
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   }
  
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const DateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShowForm(false);
  }

  var form = (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <span className="new-expense__actions ">
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </span>
        <span className="new-expense__actions">
          <button type="submit" onClick={cancleFormButtonHandler}>
            Cancel
          </button>
        </span>
      </div>
    </form>
  );
  if (showForm === false) {
    form = (
        <div className="">
          <button type="submit" onClick={showFormButtonHandler}>
            Add New Expense
          </button>
        </div>
    );
   }

  return form;
}