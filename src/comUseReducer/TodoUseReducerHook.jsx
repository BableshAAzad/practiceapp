import React, { useReducer } from 'react';
import "./../componentsFiles/TodoApp.css";

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

    let formData = (e) => {
        e.preventDefault();
        dispatcher({ actionType: 'ADD', payload: e.target.elements.task.value });
        e.target.elements.task.value = "";
    }

    let deleteTask = (index) => {
        dispatcher({ actionType: 'DELETE', payload: index });
    }

    return (
        <>
            <div id='todo_app'>
                <section id="productCoun">Total Tasks : {taskName.length} </section>
                <div id="inp_container">
                    <form onSubmit={formData} id='inp'>
                        <input type="text" name="task" id="task" placeholder='Enter task name' />
                        <button type='submit' id='add'>Add</button>
                    </form>
                </div>
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
