import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Phone", amount: 150, date: new Date(2021, 10, 15) },
    { id: "e2", title: "Car Note", amount: 365, date: new Date(2021, 10, 22) },
    { id: "e3", title: "Gym", amount: 55, date: new Date(2021, 10, 28) },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
