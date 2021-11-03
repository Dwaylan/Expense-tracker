import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function Expense(props) {
  // The initial state is set at 2021 until setFiltered year
  // is triggered and re-establishes the state
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    console.log("expenses.js");
    // setting the filtered year to the new selected year on change
    setFilteredYear(selectedYear);
  };

  // The filteredExpenses function gathers all items as a property and uses the filter
  // method. Passes the expense array as an object to be filtered through and returns
  // a new array of object based off of the filtered year
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No item(s) found</p>;

  // If the the filtered expenses returned is greater than "0" the expenses content variable
  // will map the array of items accordingly
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        // Adding unique IDs to objects in order to uniquely identify the items
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          // setting the year to the initial state below
          year={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expense;
