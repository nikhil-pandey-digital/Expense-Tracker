import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
   const [isShowForm, setIsShowForm]=useState(false);
    
    const expenseDataSubmitHandler=(expense)=>{
        const newExpense={
          ...expense,
          id: Math.random()*100
        }
        props.onAddExpense(newExpense);
        
        setIsShowForm(!isShowForm);
    }

    const showFormHandler=()=>{
      
      setIsShowForm(!isShowForm);
    }

    if(isShowForm){
      return (
        <div className='new-expense'>
          <ExpenseForm onExpenseDataSubmit={expenseDataSubmitHandler} onCancel={showFormHandler}/>
        </div>
      )
    }

    return(
        <div className="new-expense">
           <button onClick={showFormHandler}>Add New Expense </button>
        </div>

    );
  
}

export default NewExpense
