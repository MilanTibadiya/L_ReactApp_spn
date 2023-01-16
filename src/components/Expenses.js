import React from "react";
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from "./Card";

const Expenses = (props) => {

    return ( 
        <Card className='expenses'>
          {/* below pass all data using js map fun dynamically... */}
          {
            props.item.map( expense => (
              <ExpenseItem
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