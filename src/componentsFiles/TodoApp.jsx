import React, { useState } from 'react';
import "./TodoApp.css";

function TodoApp() {
    let [task, settask] = useState("");
    let [tasklist, settasklist] = useState([]);
    let [counttask, setcounttask] = useState(0);

    let updateTast = ({ target: { value } }) => {
        settask(value);
    }
    let updateTaskList = () => {
        let temp = document.getElementById("task")
        if (task.length > 0) {
            settasklist([...tasklist, task]);
            setcounttask(counttask + 1);
            temp.value = "";
        } else {
            alert("Please Enter task name")
        }
    }

    // let deleteTask = (id) => {
    //     tasklist.splice(id, 1);
    //     let newTaskList = [...tasklist];
    //     settasklist(newTaskList);
    // }

    let deleteTask = (id) => {
        let newArray = tasklist.filter((t, ind) => {
            return id !== ind;
        });
        settasklist(newArray);
        setcounttask(counttask - 1);
    }
    return (
        <div id='todo_app'>
            <section id="productCoun">Total Tasks
                {/* <i class="fa-thin fa-cart-shopping"></i> */}
                : {counttask} </section>
            <div id="inp_container">
                <div id='inp'>
                    <input type="text" name="task" id="task" placeholder='Enter task name' onChange={updateTast} />
                    <input type='submit' value="Add" onClick={updateTaskList} id='add' />
                </div>
            </div>
            <div id='tasks'>
                <ol type='1'>
                    {tasklist.map((t, index) => {
                        return <li key={index}>{t}<input type='submit' value="Delete" onClick={() => { deleteTask(index) }} /></li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default TodoApp
