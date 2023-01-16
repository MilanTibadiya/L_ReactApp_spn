import React, { useState } from "react";


import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

import Card from "./Card";

const ExpenseItem = (props) => {

  const[title, setTitle] = useState(props.title);
  const[amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated!');
    setAmount('100');
  ;}

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
     <ExpenseDetails title={title} amount={amount}/>
     <button onClick={clickHandler}>Update title & amount</button>
    </Card>
  );
}

export default ExpenseItem;
