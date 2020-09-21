import React from 'react';
import Context from './Context';


function History() {
    let val = React.useContext(Context);
    let val2 = val.BillType[0];
    let obj, element;
    if(val.BillValue[0] !== 0){
        obj = document.getElementById("history");
        element = document.createElement("li");
        obj.append(element);
        if(val.BillValue[0] > 0){
            element.innerHTML = val2+" "+val.BillValue[0]+"<span id='delete_income'>|INCOME</span>";
        }else{
            element.innerHTML = val2+" "+val.BillValue[0]+"<span id='delete_expense'>|EXPENSE</span>";
        }
    }
    return (
        <div>
            <h4>Histroy</h4>
            <hr/>
            <ul id="history"></ul>
        </div>
    );
}

export default History;