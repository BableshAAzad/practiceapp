import React, { useState } from 'react'
import ChildKiran from './ChildKiran'

function ParentKiran() {
    let [cvalue, setCvalue] = useState("");
    let updateData = ({ target: { value } }) => {
        setCvalue(value)
    }
    function demo(myCName) {
       let a = document.getElementById("showData")
        a.innerHTML = `${myCName}`
    }
    return (
        <div style={{ border: "1px solid red", margin: "20px" }}>
            <h1>Parent Component</h1>
            <input type='text' name='pname' placeholder='pname' onChange={updateData} />
            <p id="showData"></p>
            <hr />
            <ChildKiran cvalue={cvalue} demo={demo} />
        </div>
    )
}

export default ParentKiran
