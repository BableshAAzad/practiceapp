import React,{ useState } from 'react';
import "./TodoApp.css";

function TodoApp() {
    let [task, settask] = useState("");
    let [tasklist, settasklist] = useState([]);
    let updateTast = ({ target: { value } }) => {
        settask(value);
    }
    let updateTaskList = () => {
        settasklist([...tasklist, task]);
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
    }
    return (
        <div id='todo_app'>
            <div id="inp_container">
                 <div id='inp'>
                      <input type="text" name="task" id="task" placeholder='Enter task name' onChange={updateTast} />
                      <input type='submit' value="Add" onClick={updateTaskList} id='add'/>
                 </div>
            </div>
            <div id='tasks'>
                <ol type='1'>
                       {tasklist.map((t, index)=>{
                        return <li key={index}>{t}<input type='submit' value="Delete" onClick={()=>{deleteTask(index)}} /></li>
                       })}
                </ol>
            </div>
        </div>
    )
}

export default TodoApp
