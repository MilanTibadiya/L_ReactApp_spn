import React, {useState} from "react";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 290.9,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e2",
    title: "Udemy Course",
    amount: 30,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e3",
    title: "New Desk(wooden)",
    amount: 100,
    date: new Date(2022, 12, 12),
  },
  {
    id: "e4",
    title: "Fuel",
    amount: 120,
    date: new Date(2023, 1, 2),
  }
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // const updatedExpense = [expense, ...expenses];
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
