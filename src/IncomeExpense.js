import React from 'react';
import Context from './Context';

let val = null;
let income = 0, expense = 0;
function IncomeExpense() {
    val = React.useContext(Context);
    let billValue = val.BillValue[0];


    if(billValue > 0){
        // INCOME BALANCE
        income += billValue;
    }else if(billValue < 0 && billValue !== 0){
        // EXPENSE BALANCE
        expense += billValue;
    }else if(billValue === 0){
        income = 0;
        expense = 0;
    }
    
    return (
        
        <div className={"incomeExpense"}>
            <div>
                <h4>Income</h4>
                <p id={"incomeValue"}>${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id={"expenseValue"}>${expense}</p>
            </div>
        </div>
        
    );
}

export default IncomeExpense;