import React, { useState } from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "../ExpenseItem/ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  let title = props.title;

  const handleClick = () => {
    console.log("updated");
    title = "updated";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
