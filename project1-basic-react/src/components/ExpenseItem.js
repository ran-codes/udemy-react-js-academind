import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 3, 1932</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$333</div>
      </div>
    </div>
  );
}

export default ExpenseItem;