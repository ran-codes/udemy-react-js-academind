import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(true);

   const showFormButtonHandler = (event) => {
     setShowForm(true);
  };
  
  const cancleFormButtonHandler = (event) => {
    setShowForm(false);
  };
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="submit" onClick={showFormButtonHandler}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancleFormButtonHandler}
        />
      )}
    </div>
  );
}
