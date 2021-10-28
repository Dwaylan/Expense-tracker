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
  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          // setting the year to the initial state below
          year={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Accessing the items from the array of objects and mapping them to 
          the ExpenseItem component. This transforms the expense objects into
          a JSX element*/}

        {/* expense is passed as a parameter which we call to extract object keys */}
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
