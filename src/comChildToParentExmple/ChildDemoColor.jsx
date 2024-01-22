import React, { useState } from 'react'

function ChildDemoColor({ getColor }) {
    let [activeClr, setActiveClr] = useState("");
    let handleChange = ({ target: { value } }) => {
        setActiveClr(value);
        getColor(value)
    }
    return (
        <div>
            <input type="text" onChange={handleChange} aria-label='input' value={activeClr} placeholder='Enter color Name' />
        </div>
    )
}

export default ChildDemoColor
