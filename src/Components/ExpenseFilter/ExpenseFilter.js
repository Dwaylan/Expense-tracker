import React from "react";

import "./ExpenseFilter.css";

// Accepting the properties from Expense.js
const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    //   Calling the properties of onChangeFilter and forwarding them
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          // calling the properties of "year" to set the initial value
          value={props.year}
          onChange={filterChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
