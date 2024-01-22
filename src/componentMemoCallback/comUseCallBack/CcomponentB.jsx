import React, { memo } from 'react'

function CcomponentB({ count1, updateCount1 }) {
    console.log('Component B rendered');
    return (
        <div>
            <h1>Component B</h1>
            <h3>CountB : {count1}</h3>
            <button onClick={updateCount1}>UpdateB</button>
        </div>
    )
}

export default memo(CcomponentB)
