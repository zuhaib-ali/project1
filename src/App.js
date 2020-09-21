import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import History from './History';
import NewTransaction from './NewTransaction';
import Context from './Context';

let BillType, BillValue;
function App() {
  BillType = React.useState("Type");
  BillValue = React.useState(0.00);
  return (
    <Context.Provider value={{BillType, BillValue}}>
    <>
      <header>
        <h1 className={"h"}>Expense Tracker</h1>
      </header>
      <Balance></Balance><br/>
      <IncomeExpense></IncomeExpense><br/>
      <History></History>
      <NewTransaction></NewTransaction>
    </>
    </Context.Provider>
  );
}

export default App;
