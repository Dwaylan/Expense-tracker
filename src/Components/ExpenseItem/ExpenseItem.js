import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <h2>{props.date.toISOstring()}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
