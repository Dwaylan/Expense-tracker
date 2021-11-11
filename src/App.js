import React, { useState } from "react";

import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Example Expense",
    amount: 150,
    date: new Date(2021, 10, 15),
  },
];
function App() {
  // The initial state is set to render the array of dummy expenses until setFiltered year
  // is triggered and re-establishes the state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in app.js");

    // Take the expenses state and returns a new expense to the original array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  const deleteExpenseHandler = (expense) =>{
    console.log('delete was clicked')
    setExpenses(())
  }
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* The item property is passing in the expenses array to the 
      expense component */}
      <Expense item={expenses}></Expense>
    </div>
  );
}

export default App;
