import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h1>No ExpenseItem</h1>;
  }
  if (props.items.length !== 0) {
    return props.items.map(function (expenseItem) {
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
}
