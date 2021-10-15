import React from 'react';
import './AddExpenseSection.scss';
import NewExpense from './newExpense/NewExpense';

const AddExpenseSection = (props) => {
    return (
        <section className="addexpense-section">
            <NewExpense onSaveNewExpense={props.onSaveNewExpense}
            newExpense={props.newExpense}/>
        </section>
    );
};

export default AddExpenseSection;