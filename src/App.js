import React, {useState} from "react";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSE = [
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
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  //just - Task for use of loopp
  // let a =[]
  // for(var i=0; i<10; i++){
  //   a.push(<div className="expense-item">
  //   <div>2023-02-11</div>
  //   <div className="expense-item__description">
  //       <h2>Car Insurance</h2> 
  //       <div className="expense-item__price">$120</div>
  //   </div>
  // </div>);
  // }

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }
  
  return (
    <div>
      {/* {a} */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
