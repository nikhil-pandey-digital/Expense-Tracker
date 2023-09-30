import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // multiple state approch
    const[enteredTitle, setEnteredTitle]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    
    //single state approch
    // const[userInput,setUserInput]=useState({
    //   enteredTitle:'',
    //   enteredAmount:'',
    //   enteredDate:'',
    // });
  
    const titleChangeHandler=(event)=>{
      setEnteredTitle(event.target.value);
      // setUserInput((prevState)=>{
      //   return {...prevState,enteredTitle:event.target.value}
      // })
    }

    const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value);
      // setUserInput((prevState)=>{
      //   return {...prevState,enteredAmount:event.target.value}
      // })
    }
    const dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value);
      // setUserInput((prevState)=>{
      //   return {...prevState,enteredDate:event.target.value}
      // })
    }

    const submitHandler=(event)=>{

       console.log("submit handler")
        event.preventDefault();

        const expenseData={
          title:enteredTitle,
          amount:+enteredAmount,
          date: new Date(enteredDate)
        }

        //passing data to parent component
        props.onExpenseDataSubmit(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="01-01-2019"
            max="31-12-2022"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
