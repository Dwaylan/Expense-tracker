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
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
