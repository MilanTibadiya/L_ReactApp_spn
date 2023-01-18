import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpansesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item?.filter(expense => 
     expense.date.getFullYear().toString() === filteredYear
  ); 
 console.log(props?.item);
  return (
    <div>
    <Card className="expenses">.
    <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>   
      <ExpensesList items={filteredExpenses}/>
      {/* <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}/> */}
    </Card>
    </div>
  );
};

export default Expenses;
