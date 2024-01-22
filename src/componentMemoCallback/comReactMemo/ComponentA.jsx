import React from 'react'

function ComponentA() {
    console.log("Component A rendered")
    return (
        <div>
            <h1>Component A</h1>
        </div>
    )
}

export default React.memo(ComponentA);
