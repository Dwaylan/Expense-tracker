import React, { useState } from "react";

import Card from "../Card/Card";
import "./Expense.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

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

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          // setting the year to the initial state below
          year={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
