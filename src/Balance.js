import React from 'react';
import Context from './Context';

let val, currentBalance = null;
function Balance() {

    val = React.useContext(Context);

    if(val.BillValue[0] > 0 && val.BillValue[0] !==0 ){
        currentBalance += val.BillValue[0];
        return (
            <div className={"currentBalance"}>
                <h4>Your Balance</h4>
                <p>${currentBalance}</p>
            </div>
        )    
    }else if(val.BillValue[0] === 0){
        currentBalance = 0;
        return (
            <div className={"currentBalance"}>
                <h4>Your Balance</h4>
                <p>${currentBalance}</p>
            </div>
        )    
    }else{
        currentBalance += val.BillValue[0];
        return (
            <div className={"currentBalance"}>
                <h4>Your Balance</h4>
                <p>${currentBalance}</p>
            </div>
        )    
    }
    
}

export default Balance;