import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // A boolean state to determine whether the button was clocked
  // The initial state is false
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandler = () => {
    setIsEditing(true);
    console.log("button was clicked");
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* If editing is false, show the button */}
      {!isEditing && <button onClick={editingHandler}>New Expense</button>}

      {/* If editing it true, show the form */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          //providing a property that holds the stop editing handler
          // and passing it down into the Expense form
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
