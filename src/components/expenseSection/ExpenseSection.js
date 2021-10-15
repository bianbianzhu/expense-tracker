import React from "react";
import ExpenseTable from "./expenseTable/ExpenseTable";
import "./ExpenseSection.scss";

const ExpenseSection = (props) => {

  const expenses = [...props.expenses];
  


  return (
    <section className="expense-section">
      <div className="expense-section__nav">
        <h2 className="expense-section__title">Expenses</h2>
        <button className="btn btn--dots expense-section__btn">...</button>
      </div>
      <ExpenseTable expenses={expenses}/>
    </section>
  );
};

export default ExpenseSection;
