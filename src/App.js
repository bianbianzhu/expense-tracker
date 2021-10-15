import { useEffect, useState } from "react";
import "./App.scss";
import DashboardPage from "./pages/DashboardPage";

const fetchedTotal = {
  income: 402184,
  expense: 205382,
};


const fetchedExpenses = [{date: '2021-09-06' , name: 'Woolworths Shopping' ,amount: 199.67 },
{date: '2021-09-07' , name: 'Adobe Subscription' ,amount: 14.29 },
{date: '2021-09-08' , name: 'Water Bill' ,amount: 1050.20 },
{date: '2021-09-08' , name: 'Cat Petting Tax' ,amount: 2.99 }]

function App() {
  ////////////////for total section- pass down///////////////////////////
  const [total, setTotal] = useState({ income: undefined, expense: undefined });
 ///////////////for expense section- pass down//////////////////////////
  const [expenses, setExpenses] = useState([]);

  /////////////for add expense section - lift up////////////////////////
  
  const [newExpense, setNewEpense] = useState({});

  const saveNewExpenseHandler = (inputNewExpenseData) => {
      setNewEpense(inputNewExpenseData);

      // setExpenses((preState) => {
      //   return [...preState, newExpense]
      // });// it workkkedded?? nope, it can only get the undefined new object
  }



  //////////////////////////////////////////////////////////////

  useEffect(() => {
    setTotal(fetchedTotal);
    setExpenses(fetchedExpenses);
  }, []);


  ////// this will work, it listens to the newExpense, if it changes, the expenses will update
  useEffect(() => {
    setExpenses((preState) => {
        return [...preState, newExpense]
      });
  }, [newExpense])

  return (
    <div className="App">
      <DashboardPage total={total} expenses={expenses} onSaveNewExpense={saveNewExpenseHandler}
      newExpense={newExpense}/>
    </div>
  );
}

export default App;
