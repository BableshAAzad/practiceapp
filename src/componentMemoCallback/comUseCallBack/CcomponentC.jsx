import React, { memo } from 'react'

function CcomponentC({ count2, updateCount2 }) {
    console.log('Component C rendered');
    return (
        <div>
            <h1>Component C</h1>
            <h3>CountB : {count2}</h3>
            <button onClick={updateCount2}>UpdateB</button>
        </div>
    )
}

export default memo(CcomponentC)
