import React, { memo } from 'react'

function ComponentB({ count }) {
    console.log("Component B rendered")
    return (
        <div>
            <h1>CountB : {count}</h1>
            <h1>Component B</h1>
        </div>
    )
}

export default memo(ComponentB);
