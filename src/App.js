import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AlertComp from './components/AlertComp';
import FormComp from './components/FormComp';
import ListComp from './components/ListComp';
import uuid from 'uuid/v4';

const initialExpenses = [
  { id: 1, charge: "rent", amount: 200 }
];
function App() {
  // The States Goes Here
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  // The Functions Goes Here
  const chargeHandler = e => {
    setCharge(e.target.value)
  }
  const amountHandler = e => {
    setAmount(e.target.value)
  }
  const alertHandler = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text
    })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }
  const submitHandler = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge,
        amount
      }
      setExpenses([...expenses, singleExpense]);
      alertHandler({ type: "success", text: "item Added" })
      setCharge('')
      setAmount('')
    }
    else {
      alertHandler({
        type: "danger",
        text: `Charge Must Be a String and Amount Should Be Bigger Than Zero`
      })
    }
    setEdit(false)
  }
  const clearListHandler = () => {
    setExpenses([])
  }
  const deleteItem = id => {
    let tempExpenses = expenses.filter(expense => {
      return expense.id !== id
    })
    setExpenses([...tempExpenses])
    alertHandler({
      type: 'danger',
      text: 'Item Deleted'
    })
  }
  const editItem = id => {
    let tempExpenses = expenses.filter(expense => {
      return expense.id !== id
    })
    setExpenses([...tempExpenses])
    let expenseEditing = expenses.find(expense => {
      return expense.id === id
    })
    setCharge(expenseEditing.charge)
    setAmount(expenseEditing.amount)
    setEdit(true)
    alertHandler({
      type: "warning",
      text: "You Can Modifying The Item Now"
    })
  }

  return (
    <div className="container-fluid">
      <div className="row py-5">
        {alert.show && <AlertComp type={alert.type} text={alert.text} />}
        <div className="col-sm-12 text-center">
          <h1 className="text-center mt-3 text-primary">Budget Calculator</h1>
        </div>
        <FormComp
          chargeHandler={chargeHandler}
          amountHandler={amountHandler}
          submitHandler={submitHandler}
          charge={charge}
          amount={amount}
          edit={edit} />
        <ListComp
          expenses={expenses}
          clearListHandler={clearListHandler}
          deleteItem={deleteItem}
          editItem={editItem} />
        <div className="col-sm-12 col-md-8 offset-md-2">
          <h2 className="text-center text-success mt-3">Total Spending: <span>
            {expenses.reduce((item, cur) => {
              return item += parseInt(cur.amount)
            }, 0)}
          </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
