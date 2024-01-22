import React, { useReducer, useState } from 'react';
import "./CalculatorUseReducerCSS.css";
let initialVal = 0;
let reducer = (cval, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD": return action.data[0] + action.data[1]; //* +
        case "SUB": return action.data[0] - action.data[1];; //* -
        case "MUL": return action.data[0] * action.data[1];; //* *
        case "DIV": return action.data[0] / action.data[1];; //* /
        case "MOD": return action.data[0] % action.data[1];; //* %
        default: return 0;
    }
}
function CalculatorUseReducer() {
    let [val1, setVal1] = useState([]);
    let [val2, setVal2] = useState([]);
    let [val, dispatcher] = useReducer(reducer, initialVal);
    let getVal1 = ({ target: { value } }) => {
        setVal1(parseInt(value))
    }
    let getVal2 = ({ target: { value } }) => {
        setVal2(parseInt(value))
    }
    return (
        <div id="calcul">
            <h3 id='heading'>Calculator using useReducer</h3>
            <h3>Result : <span style={{ color: "blue" }}>{val}</span></h3>
            <input type='number' placeholder='First Num' id='num1' onChange={getVal1} />
            <input type='number' placeholder='Second Num' id='num2' onChange={getVal2} /><br />
            <button className='btn' onClick={() => { dispatcher({ type: "ADD", data: [val1, val2] }) }}>+</button>
            <button className='btn' onClick={() => { dispatcher({ type: "SUB", data: [val1, val2] }) }}>-</button>
            <button className='btn' onClick={() => { dispatcher({ type: "MUL", data: [val1, val2] }) }}>*</button>
            <button className='btn' onClick={() => { dispatcher({ type: "DIV", data: [val1, val2] }) }}>/</button>
            <button className='btn' onClick={() => { dispatcher({ type: "MOD", data: [val1, val2] }) }}>%</button>
        </div>
    )
}

export default CalculatorUseReducer
