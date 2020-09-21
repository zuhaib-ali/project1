import React from 'react';
import Context from './Context';
let val = null;

function NewTransaction() {
    val = React.useContext(Context);
    
    let setBillType = val.BillType[1];
    let setBillValue = val.BillValue[1];
    return (
        <div>
            <h4>Add New Transaction</h4>
            <hr/>
            Bill Type<br/>
            <input type={"text"} id={"billType"} className={"newTran"} placeholder={"Ex: Gass Bill..."}></input>
            <br/><br/>
            Amount (use - sign to show Expense)
            <input type={"number"} id={"billValue"} className={"newTran"} placeholder={"$0.00"}></input>
            <hr/>
            <button onClick={()=>{
                setBillType(document.getElementById("billType").value);
                setBillValue(Number(document.getElementById("billValue").value));
            }} type={"button"} className={"addTran"}>Add Transaction</button>
            <button onClick={()=>{
                setBillType("type");
                setBillValue(0);
                document.getElementById("billType").value = "";
                document.getElementById("billValue").value = 0;
            }}>Clear All</button>
        </div>
        
    );
}

export default NewTransaction;