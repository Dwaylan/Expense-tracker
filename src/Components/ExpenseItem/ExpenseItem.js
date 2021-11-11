import React from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "../ExpenseItem/ExpenseItem.css";

// The expense item function is receiving the properties from the app.js expenses object
// and the array of objects within that object
function ExpenseItem(props) {
  // const deleteHandler = () => {
  //   props.onDelete(props.id);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">
          <h2>${props.amount}</h2>
        </div>
        <div>
          {/* onClick={deleteHandler} */}
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
