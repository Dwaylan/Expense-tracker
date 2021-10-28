import React, { useState } from "react";

import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Phone", amount: 150, date: new Date(2021, 10, 15) },
    { id: "e2", title: "Car Note", amount: 365, date: new Date(2021, 10, 22) },
    { id: "e3", title: "Gym", amount: 55, date: new Date(2021, 10, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
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
