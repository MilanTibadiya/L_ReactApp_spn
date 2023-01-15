import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

import Card from "./Card";

const ExpenseItem = (props) => {

  const clickHandler = (event) => {
    console.log(event.target.value + 'clk');
  }
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
     <ExpenseDetails title={props.title} amount={props.amount}/>
     <button onClick={clickHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
