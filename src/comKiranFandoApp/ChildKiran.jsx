import React, { useState } from 'react'

function ChildKiran({ cvalue, demo }) {
    let [getCname, setCName] = useState("");
    let getCNameValue = ({ target: { value } }) => {
        setCName(value)
    }
    let udateCName = () => {
        let temp = document.getElementById("ptag")
        temp.innerHTML = `${cvalue}`
    }
    let removeCName = () => {
        let temp = document.getElementById("ptag")
        temp.innerHTML = ``
    }
    return (
        <div style={{ border: "1px solid blue", margin: "20px" }}>
            <h1>Child Component</h1>
            <input type='text' name='cname' placeholder='cname' onChange={getCNameValue} />
            <button onClick={() => { demo(getCname) }}>UpdateC</button>
            <button onClick={udateCName}>Show</button>
            <button onClick={removeCName}>Hide</button>
            <p id='ptag'></p>
        </div>
    )
}

export default ChildKiran
