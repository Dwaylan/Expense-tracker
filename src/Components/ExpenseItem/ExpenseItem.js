import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
