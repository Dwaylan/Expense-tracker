import Expenses from "./Components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Phone", amount: 150, date: new Date(2021, 10, 15) },
    { id: "e2", title: "Car Note", amount: 365, date: new Date(2021, 10, 22) },
    { id: "e3", title: "Gym", amount: 55, date: new Date(2021, 10, 28) },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
