import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css"

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <div className="expenses-list__fallback">Found No Expenses.</div>;
  }
 
  return (
    <ul className="expenses-list">
      {props.items.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
    </ul>
  )

}
