import React, { useReducer, useRef, useState } from 'react'
import "./TodoReducerCSS.css"

let initialvalue = ["Bablesh", "Kumar", "AAzad"];
let reducer = (cstate, action) => {
    switch (action.type) {
        case "ADD": return [...cstate, action.ddd];
        case "DELETE": let temp = cstate.filter((val, ind) => {
            return ind !== action.ddd;
        })
            return temp;
        default: return cstate;
    }
}
function TodoReducer2() {
    let [data, despatcher] = useReducer(reducer, initialvalue);
    let tref = useRef(null);
    let [alert, setAlert] = useState(false);
    let getUserName = (e) => {
        alert("Task Added")
        e.preventDefault();
        despatcher({ type: "ADD", ddd: e.target.ename.value })
    }
    let showAlert = () => {
        setTimeout(() => {
            setAlert(false)
        },0);

    }
    let deleteUser = (ind) => {
        showAlert()
        clearTimeout(showAlert, 1500);
        despatcher({ type: "DELETE", ddd: ind })
    }
    return (
        <>
            {alert && <div id='alertDiv'>Deleted</div>}
            <form onSubmit={getUserName}>
                <input type='text' name='ename' id='ename' placeholder='Enter your name' />
                <button type='submit' >Add</button>
            </form>
            <ol>
                {data.map((val, ind) => {
                    return <li key={ind}>{val} <button ref={tref} onClick={() => { deleteUser(ind) }}>X</button></li>
                })}
            </ol>
        </>
    )
}

export default TodoReducer2
