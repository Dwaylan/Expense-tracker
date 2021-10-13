import React from "react";
import "./ExpenseItem.css"

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>
        <h2>Date</h2>
      </div>
      <div className="expense-item__description">
        <h2>Title</h2>
      </div>
      <div className="expense-item__price">
        <h2>Amount</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
