import React from "react";
import CheckBox from "../../UI/checkbox/CheckBox";
import "./ExpenseTable.scss";
import ExpenseTableItem from "./expenseTableItem/ExpenseTableItem";

const ExpenseList = (props) => {
  const expenses = [ ...props.expenses ];

  return (
    <table className="expense-table">
      <tbody>
        <tr className="expense-table__header-row">
          <th>
            <CheckBox checkbox_id="name-filter" />
          </th>
          <th>
            name
            <select name="name-sequence" className="dropdown">
              <option value=""></option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </th>
          <th>date</th>
          <th>amount</th>
        </tr>
        {expenses.map((expense, index) => {
          return <ExpenseTableItem key={index} name={expense.name} date={expense.date} amount={expense.amount} checkbox_id={index}/>;
        })}
      </tbody>
    </table>
  );
};

export default ExpenseList;
