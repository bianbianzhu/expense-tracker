import React from 'react';
import './DashboardPage.scss';
import TotalSection from '../components/totalSection/TotalSection';
import ExpenseSection from '../components/expenseSection/ExpenseSection';
import AddExpenseSection from '../components/addExpenseSection/AddExpenseSection';

const DashboardPage = (props) => {
 
    const total = {...props.total};
    const expenses = [...props.expenses];

    

    return (
        <div className="dashboard-page">
            <main>
                <TotalSection total = {total} />
               <h1 className="dashboard-page__main-heading">
                   Dashboard
               </h1>
               <AddExpenseSection onSaveNewExpense={props.onSaveNewExpense}
               newExpense={props.newExpense}/>
               <ExpenseSection expenses = {expenses}/>
            </main>
        </div>
    );
};

export default DashboardPage;