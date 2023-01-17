import React, { useState } from "react";
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

    return ( 
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {
            props.item.map( expense => (
              <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            ))
          }
           
      {/* <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}/> */}

        </Card>
    )
}

export default Expenses;