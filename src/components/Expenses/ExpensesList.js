import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {

  

    if (props.list.length === 0) {
         return <div className='expenses-list__fallback'> No Expense Found</div>
    }

  return (
    <ul className='expenses-list'>
        {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}
    </ul>
  )
}

export default ExpensesList
