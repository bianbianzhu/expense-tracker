import React from "react";
import "./ExpenseTableItem.scss";
import { RiEdit2Fill, RiDeleteBin4Fill } from "react-icons/ri";
import CheckBox from "../../../UI/checkbox/CheckBox";

const ExpenseTableItem = (props) => {

  const name = props.name;
  const date = new Date(props.date).toLocaleDateString('en-AU', {
      day: '2-digit', month: 'short', year:'2-digit'
  });
  const amount = props.amount;

  const checkbox_id = props.checkbox_id.toString(); // number 0 cannot be a key????

  console.log(name);
  console.log(date);
  console.log(amount);

  return (
    <tr className="expenseTable-item">
      <td>
        <CheckBox checkbox_id={checkbox_id} />
      </td>
      <td className="expenseTable-item__name">{name}</td>
      <td className="expenseTable-item__date">{date}</td>
      <td className="expenseTable-item__amount">{amount}</td>
      <td className="expenseTable-item__actions-wrapper">
        <div className="expenseTable-item__actions">
          <button className="btn btn--icon">
            <RiEdit2Fill />
          </button>
          <button className="btn btn--icon">
            <RiDeleteBin4Fill />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseTableItem;
