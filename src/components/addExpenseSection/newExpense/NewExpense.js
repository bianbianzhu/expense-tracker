import React from "react";
import CardDefault from "../../UI/card/cardDefault/CardDefault";
import "./NewExpense.scss";
import { RiAddCircleFill } from "react-icons/ri";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [inputNewExpense, setInputNewExpense] = useState({
    name: '',
    date: '2021-01-02',
    amount: 0,
  });

  const inputChangeHandler = (e) => {
    if (e.target.name === "name") {
      setInputNewExpense((preState) => {
        return { ...preState, name: e.target.value };
      });
    }

    if (e.target.name === "date") {
        setInputNewExpense((preState) => {
            return {
                ...preState,
                date: e.target.value
            }
        })
    }

    if (e.target.name === "amount") {
        setInputNewExpense((preState) => {
            return {
                ...preState,
                amount: e.target.value
            }
        })
    }
  };

//   console.log(inputNewExpense);

console.log('low');
console.log(props.newExpense);

const submitFormHandler = (e) => {
   e.preventDefault();
   props.onSaveNewExpense({...inputNewExpense});

   setInputNewExpense({
       name: "",
       date:"2021-01-01",
       amount: 0
   })
}

  return (
    <CardDefault className="new-expense">
      <form onSubmit={submitFormHandler}>
        <label htmlFor="new-expense-name">Name</label>
        <input
          type="text"
          id="new-expense-name"
          className="input--expense"
          placeholder="Please enter a name"
          onChange={inputChangeHandler}
          name="name"
          value={inputNewExpense.name}
        />
        <label htmlFor="new-expense-date">Date</label>
        <input
          type="date"
          id="new-expense-date"
          className="input--expense"
          onChange={inputChangeHandler}
          name="date"
          value={inputNewExpense.date}
        />
        <label htmlFor="new-expense-amount">Amount</label>
        <input
          type="number"
          id="new-expense-amount"
          className="input--expense"
          min="0.01"
          step="0.01"
          placeholder="Please enter an amount"
          name="amount"
          onChange={inputChangeHandler}
          value={inputNewExpense.amount}
        />
        <div className="new-expense__actions">
          <button className="btn btn--add">
            <RiAddCircleFill />
          </button>
        </div>
      </form>
    </CardDefault>
  );
};

export default NewExpense;
