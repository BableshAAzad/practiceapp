import React, { useEffect, useReducer, useState } from 'react';
import "./../componentsFiles/TodoApp.css";
import PopUp from './PopUp';

let initialState = ["Bablesh", "Kumar", "AAzad"];
let reducer = (cstate, action) => {
    switch (action.actionType) {
        case 'ADD':

            return [...cstate, action.payload];
        case 'DELETE':
            return cstate.filter((task, index) => index !== action.payload);
        default:
            return cstate;
    }
};

function TodoUseReducerHook() {
    let [taskName, dispatcher] = useReducer(reducer, initialState);
    let [toggle, setToggle] = useState(false);
    let [pop, setPop] = useState("")

    let formData = (e) => {
        e.preventDefault();
        dispatcher({ actionType: 'ADD', payload: e.target.elements.task.value });
        e.target.elements.task.value = "";
        setToggle(true)
        setPop("ADD")
    }

    let deleteTask = (index) => {
        dispatcher({ actionType: 'DELETE', payload: index });
        setToggle(true)
        setPop("DELETE")
    }
    useEffect(() => {
        setTimeout(() => {
            setToggle(false)
        }, 2000)
    }, [taskName])
    return (
        <>
            <div id='todo_app'>
            <h1>Todo using UseReducer Hook</h1>
                <section id="productCoun">Total Tasks : {taskName.length} </section>
                <div id="inp_container">
                    <form onSubmit={formData} id='inp'>
                        <input type="text" name="task" id="task" placeholder='Enter task name' />
                        <button type='submit' id='addItem'>Add</button>
                    </form>
                </div>
                <br />
                {toggle && pop === "ADD" && <PopUp col="green" msg="Added" />}
                {toggle && pop === "DELETE" && <PopUp col="red" msg="Removed" />}
                <div id='tasks'>
                    <ol type='1'>
                        {taskName.map((t, index) => (
                            <li key={index}>
                                {t}
                                <button type='button' onClick={() => { deleteTask(index) }}>Delete</button>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoUseReducerHook;
