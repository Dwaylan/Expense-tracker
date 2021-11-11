import React from "react";
import "./ExpenseList.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  // If the the filtered expenses returned is greater than "0" the expenses content variable
  // will map the array of items accordingly
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          // Adding unique IDs to objects in order to uniquely identify the items
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
