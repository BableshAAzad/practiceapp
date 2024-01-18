import React, { useEffect, useReducer, useState } from 'react'
import PopUp from './PopUp';
let initialval = ["Bablesh", "Kumar", "AAzad"]
let reducer = (cename, action) => {
    switch (action.casenum) {
        case "Add": return [...cename, action.ename];
        case "Delete": let filteredName = cename.filter((val, ind) => {
            return action.indexVal !== ind;
        })
            return filteredName;
        default: return cename;
    }
}
function TodoPopUp() {
    let [valEname, enameDispatcher] = useReducer(reducer, initialval)
    let [ename, setEname] = useState("")
    let [toggle, setToggle] = useState(false);
    let [pop, setPop] = useState("")
    let getEname = ({ target: { value } }) => {
        setEname(value)
    }
    let submitEname = () => {
        enameDispatcher({ casenum: "Add", ename: ename });
        setToggle(true)
        setPop("ADD")
    }
    let deleteEname = (ind) => {
        enameDispatcher({ casenum: "Delete", indexVal: ind });
        setToggle(true)
        setPop("DELETE")
    }
    useEffect(() => {
        setTimeout(() => {
            setToggle(false)
        }, 2000)
    }, [valEname])
    return (
        <div>
            {toggle && pop === "ADD" && <PopUp col="green" msg="Added"/>}
            {toggle && pop === "DELETE" && <PopUp col="red" msg="Removed"/>}
            <input type='text' placeholder='Enter your name' onChange={getEname} />
            <button onClick={submitEname}>Add</button>
            <ol>
                {valEname.map((val, ind) => {
                    return <li key={ind}>{val} <button onClick={() => { deleteEname(ind) }}> X </button></li>
                })}
            </ol>
        </div>
    )
}

export default TodoPopUp
